
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { addDeveloperToWaitlist } from "@/services/waitlist";
import type { DeveloperWaitlist } from "@/types/waitlist";

const developerRoles = [
  "Full Stack", "Front End", "Back End", "Mobile Developer",
  "Data Science", "DevOps", "QA Tester", "Other"
];

const englishLevels = [
  { label: "Básico", value: "basic" },
  { label: "Intermediário", value: "intermediate" },
  { label: "Avançado", value: "advanced" },
  { label: "Fluente", value: "fluent" }
];

const commissionOptions = [
  "5%", "10%", "15%", "20%", "25%", "Other"
];

const stacks = [
  "JavaScript", "Python", "Java", "C#", "Ruby", "PHP", "Go",
  "TypeScript", "React", "Node.js", "Angular", "Vue.js", "Docker", "Kubernetes"
];

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [showCommissionDialog, setShowCommissionDialog] = useState(false);
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DeveloperWaitlist | null>(null);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const developerData: DeveloperWaitlist = {
        full_name: formData.get("name") as string,
        email: formData.get("email") as string,
        birth_date: formData.get("birthdate") as string,
        tech_stack: selectedStacks,
        phone: formData.get("phone") as string || undefined,
        english_level: formData.get("englishLevel") as string || undefined,
        commission_feedback: formData.get("feedback") as string || undefined,
      };

      setFormData(developerData);
      setShowCommissionDialog(true);
    } catch (error: any) {
      console.error("Error in form submission:", error);
      toast({
        title: t("waitlist.error.title"),
        description: t("waitlist.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCommissionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) return;

    setIsSubmitting(true);
    try {
      const commissionFormData = new FormData(e.currentTarget);
      const commission = commissionFormData.get("commission") as string;
      const additionalFeedback = commissionFormData.get("additionalFeedback") as string;

      const finalData: DeveloperWaitlist = {
        ...formData,
        commission_feedback: `${commission}${additionalFeedback ? ` - ${additionalFeedback}` : ''}`
      };

      await addDeveloperToWaitlist(finalData);

      toast({
        title: t("Enviado com sucesso"),
        description: t("waitlist.success.developer"),
      });
      setShowCommissionDialog(false);
      setOpen(false);
    } catch (error: any) {
      if (error?.message?.includes("waitlist_developers_email_key") || 
          error?.message?.includes("23505")) {
        toast({
          title: t("waitlist.error.duplicate.title"),
          description: t("waitlist.error.duplicate.description.developer"),
          variant: "destructive"
        });
      } else {
        toast({
          title: t("waitlist.error.title"),
          description: t("waitlist.error.description"),
          variant: "destructive",
        });
      }
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
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg animate-pulse">
            {t('waitlist.button')}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {t('waitlist.developer')}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" name="name" required className="bg-background" disabled={isSubmitting} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="bg-background" disabled={isSubmitting} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="birthdate">Data de Nascimento</Label>
                <Input id="birthdate" name="birthdate" type="date" required className="bg-background" disabled={isSubmitting} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Celular</Label>
                <Input id="phone" name="phone" type="tel" required className="bg-background" disabled={isSubmitting} />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="englishLevel">Nível de Inglês</Label>
              <Select name="englishLevel" required>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione seu nível de inglês" />
                </SelectTrigger>
                <SelectContent>
                  {englishLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
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
                    disabled={isSubmitting}
                  >
                    {stack}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-secondary/90 mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : t('waitlist.submit')}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showCommissionDialog} onOpenChange={setShowCommissionDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center mb-4">
              Feedback sobre Comissão
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleCommissionSubmit} className="space-y-4">
            <div className="text-sm text-gray-600 mb-4">
              Nosso objetivo é conectar você às melhores oportunidades globais. Para garantir um serviço sustentável, cobramos uma comissão justa por cada oportunidade. Quanto você acha que seria um valor justo? Se preferir, compartilhe sua opinião.
            </div>

            <div className="space-y-1">
              <Label htmlFor="commission">Comissão Sugerida</Label>
              <Select name="commission" required>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione uma porcentagem" />
                </SelectTrigger>
                <SelectContent>
                  {commissionOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="additionalFeedback">Comentários Adicionais (opcional)</Label>
              <Input
                id="additionalFeedback"
                name="additionalFeedback"
                className="bg-background"
                placeholder="Compartilhe sua opinião sobre a comissão"
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Feedback"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
