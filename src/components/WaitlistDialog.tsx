import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });
    setOpen(false);
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
          Join the Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {!userType ? "Choose Your Path" : `Start Building Your Dream ${userType === "developer" ? "Career" : "Team"}`}
          </DialogTitle>
        </DialogHeader>
        
        {!userType ? (
          <div className="flex flex-col gap-4 py-6">
            <Button
              size="lg"
              onClick={() => setUserType("developer")}
              className="w-full py-8 text-lg transition-all hover:scale-105"
            >
              I'm a Developer
            </Button>
            <Button
              size="lg"
              onClick={() => setUserType("company")}
              className="w-full py-8 text-lg transition-all hover:scale-105"
            >
              I'm a Company
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
              ← Back to selection
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
              Submit and Join
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}