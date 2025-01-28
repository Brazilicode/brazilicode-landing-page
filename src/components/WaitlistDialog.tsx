import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { addDeveloperToWaitlist, addCompanyToWaitlist } from "@/lib/supabase/waitlist";

const developerRoles = [
  "Full Stack", "Front End", "Back End", "Mobile Developer",
  "Data Science", "DevOps", "QA Tester", "Other"
];

const companyRoles = [
  "CEO", "CTO", "COO", "CPO", "Developer", "Analyst", "Other"
];

const companyCategories = [
  "Fintech", "Technology", "Healthcare", "Marketing", "E-commerce", "Other"
];

const companySizes = [
  "Small (1-10 employees)",
  "Medium (11-50 employees)",
  "Large (50+ employees)"
];

const seniorities = [
  "Junior (0-2 years)",
  "Mid-level (3-5 years)",
  "Senior (6+ years)"
];

const stacks = [
  "JavaScript", "Python", "Java", "C#", "Ruby", "PHP", "Go",
  "TypeScript", "React", "Node.js", "Angular", "Vue.js", "Docker", "Kubernetes"
];

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState<"developer" | "company" | null>(null);
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      if (userType === "developer") {
        await addDeveloperToWaitlist(
          {
            full_name: formData.get('name') as string,
            email: formData.get('email') as string,
            role: 'developer',
          },
          {
            seniority: formData.get('seniority') as string,
            stack: selectedStacks,
            birthdate: formData.get('birthdate') as string,
            developer_role: formData.get('role') as string,
          }
        );
      } else {
        await addCompanyToWaitlist(
          {
            full_name: formData.get('responsibleName') as string,
            email: formData.get('corporateEmail') as string,
            role: 'company',
          },
          {
            company_name: formData.get('companyName') as string,
            responsible_name: formData.get('responsibleName') as string,
            company_role: formData.get('role') as string,
            company_size: formData.get('companySize') as string,
            category: formData.get('category') as string,
            corporate_email: formData.get('corporateEmail') as string,
          }
        );
      }

      toast({
        title: t('waitlist.success.title'),
        description: t('waitlist.success.description'),
      });
      setOpen(false);
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: t('waitlist.error.title'),
        description: t('waitlist.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStackToggle = (stack: string) => {
    setSelectedStacks(prev => {
      if (prev.includes(stack)) {
        return prev.filter(s => s !== stack);
      }
      if (prev.length >= 5) {
        toast({
          title: "Maximum stacks reached",
          description: "You can select up to 5 technologies",
          variant: "destructive",
        });
        return prev;
      }
      return [...prev, stack];
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg animate-pulse">
          {t('waitlist.button')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {!userType ? t('waitlist.title') : `${t('waitlist.developer')}`}
          </DialogTitle>
        </DialogHeader>
        
        {!userType ? (
          <div className="flex flex-col gap-4 py-6">
            <Button
              size="lg"
              onClick={() => setUserType("developer")}
              className="w-full py-8 text-lg transition-all hover:scale-105"
            >
              {t('waitlist.developer')}
            </Button>
            <Button
              size="lg"
              onClick={() => setUserType("company")}
              className="w-full py-8 text-lg transition-all hover:scale-105"
            >
              {t('waitlist.company')}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setUserType(null)}
              className="mb-4"
            >
              {t('waitlist.back')}
            </Button>

            {userType === "developer" ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="bg-background" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="birthdate">Date of Birth</Label>
                    <Input id="birthdate" type="date" required className="bg-background" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="seniority">Seniority</Label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {seniorities.map((seniority) => (
                          <SelectItem key={seniority} value={seniority.toLowerCase()}>
                            {seniority}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="role">Role</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {developerRoles.map((role) => (
                        <SelectItem key={role} value={role.toLowerCase()}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label>Tech Stack (max 5)</Label>
                  <div className="grid grid-cols-3 gap-1 mt-1">
                    {stacks.map((stack) => (
                      <Button
                        key={stack}
                        type="button"
                        variant={selectedStacks.includes(stack) ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleStackToggle(stack)}
                        className="text-xs h-8"
                      >
                        {stack}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" required className="bg-background" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="responsibleName">Responsible Name</Label>
                    <Input id="responsibleName" required className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="role">Role</Label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {companyRoles.map((role) => (
                          <SelectItem key={role} value={role.toLowerCase()}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size} value={size.toLowerCase()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="corporateEmail">Corporate Email</Label>
                    <Input id="corporateEmail" type="email" required className="bg-background" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {companyCategories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-6">
              {t('waitlist.submit')}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
