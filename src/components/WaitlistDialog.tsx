
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { addDeveloperToWaitlist } from "@/services/waitlist";
import type { DeveloperWaitlist, DeveloperRole } from "@/types/waitlist";

const developerRoles = [
  { value: "full stack", label: "Full Stack" },
  { value: "front end", label: "Front End" },
  { value: "back end", label: "Back End" },
  { value: "mobile developer", label: "Mobile Developer" },
  { value: "data science", label: "Data Science" },
  { value: "devops", label: "DevOps" },
  { value: "qa tester", label: "QA Tester" },
  { value: "other", label: "Outros" }
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
  "TypeScript", "React", "Node.js", "Angular", "Vue.js", "Docker", "Kubernetes", "Outros"
];

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [showCommissionDialog, setShowCommissionDialog] = useState(false);
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DeveloperWaitlist | null>(null);
  const [showCustomStack, setShowCustomStack] = useState(false);
  const [customStack, setCustomStack] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const finalTechStack = selectedStacks.includes("Outros") 
        ? [...selectedStacks.filter(stack => stack !== "Outros"), customStack]
        : selectedStacks;

      const developerData: DeveloperWaitlist = {
        full_name: formData.get("name") as string,
        email: formData.get("email") as string,
        birth_date: formData.get("birthdate") as string,
        tech_stack: finalTechStack,
        phone: formData.get("phone") as string || undefined,
        english_level: formData.get("englishLevel") as string || undefined,
        commission_feedback: formData.get("feedback") as string || undefined,
        role: formData.get("role") as DeveloperRole,
      };

      setFormData(developerData);
      setShowCommissionDialog(true);
    } catch (error: any) {
      console.error("Error in form submission:", error);
      toast({
        title: "Erro",
        description: "Houve um erro ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStackToggle = (stack: string) => {
    setSelectedStacks(prev => {
      if (prev.includes(stack)) {
        if (stack === "Outros") {
          setShowCustomStack(false);
          setCustomStack("");
        }
        return prev.filter(s => s !== stack);
      }
      if (prev.length >= 5) {
        toast({
          title: "Limite máximo atingido",
          description: "Você pode selecionar até 5 tecnologias",
          variant: "destructive",
        });
        return prev;
      }
      if (stack === "Outros") {
        setShowCustomStack(true);
      }
      return [...prev, stack];
    });
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
        title: "Enviado com sucesso",
        description: "Seus dados foram registrados com sucesso!",
      });
      setShowCommissionDialog(false);
      setOpen(false);
    } catch (error: any) {
      if (error?.message?.includes("waitlist_developers_email_key") || 
          error?.message?.includes("23505")) {
        toast({
          title: "Email já cadastrado",
          description: "Este email já está registrado em nossa lista de espera.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro",
          description: "Houve um erro ao enviar o formulário. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg animate-pulse">
            Entrar na Lista de Espera
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Cadastro de Desenvolvedor
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
              <Label htmlFor="role">Função Principal</Label>
              <Select name="role" required>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione sua função" />
                </SelectTrigger>
                <SelectContent>
                  {developerRoles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              {showCustomStack && (
                <div className="mt-2">
                  <Label htmlFor="customStack">Especifique sua tecnologia</Label>
                  <Input
                    id="customStack"
                    value={customStack}
                    onChange={(e) => setCustomStack(e.target.value)}
                    className="bg-background mt-1"
                    placeholder="Digite sua tecnologia"
                    required={selectedStacks.includes("Outros")}
                  />
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-secondary/90 mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Continuar"}
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
