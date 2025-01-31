import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Stats } from "@/components/Stats";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Globe, Video, MessageSquare, Languages, Lock, Users, Brain, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    title: "Chat with Translation",
    description: "Text automatically translated in up to 10 languages with downloadable history.",
  },
  {
    icon: <Video className="w-12 h-12 text-primary" />,
    title: "Video Calls",
    description: "HD video with real-time translated captions and integration with popular platforms.",
  },
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "Project Management",
    description: "Integrated tools for task tracking with real-time updates.",
  },
];

const challenges = [
  {
    title: "Barreira do Idioma",
    description: "Muitos desenvolvedores brasileiros têm dificuldade com o inglês, limitando suas oportunidades globais.",
  },
  {
    title: "Complexidade Burocrática",
    description: "Processos de contratação internacional podem ser complexos e demorados.",
  },
  {
    title: "Falta de Conexões",
    description: "Acesso limitado a redes profissionais internacionais e oportunidades globais.",
  },
];

const solutions = [
  {
    icon: <Languages className="w-12 h-12 text-accent" />,
    title: "IA para Comunicação",
    description: "Ferramentas de tradução em tempo real para eliminar a barreira do idioma.",
  },
  {
    icon: <Users className="w-12 h-12 text-accent" />,
    title: "Comunidade Global",
    description: "Rede de desenvolvedores e empresas internacionais.",
  },
  {
    icon: <Lock className="w-12 h-12 text-accent" />,
    title: "Processo Simplificado",
    description: "Facilitamos toda a parte burocrática da contratação internacional.",
  },
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#292929] text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/2ee14f8a-4e3a-406f-a05e-f1a20f8c11b9.png" alt="Brazilicode Logo" className="h-12" />
          <span className="text-2xl font-bold">Brazilicode</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#challenges" className="hover:text-primary transition-colors">Desafios</a>
          <a href="#solutions" className="hover:text-primary transition-colors">Soluções</a>
          <a href="#join" className="hover:text-primary transition-colors">Participar</a>
          <LanguageSelector />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Brazilicode: <span className="text-primary">Conectando</span> Devs Brasileiros ao <span className="text-secondary">Mundo</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted max-w-3xl mx-auto animate-fadeIn">
          Junte-se à comunidade que está exportando serviços para o mundo todo. Inscreva-se na lista de espera e seja o primeiro a saber das novidades.
        </p>
        <WaitlistDialog />
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 bg-gradient-to-b from-[#292929] to-[#1a1a1a]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            O Desafio dos <span className="text-primary">Devs Brasileiros</span>
          </h2>
          <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
            Brazilian developers are outstanding. They thrive in a very hazardous environment, get paid from a very cheap currency, but still are used to working 14 hours/day, love to learn and work with purpose-driven businesses.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{challenge.title}</h3>
                <p className="text-muted">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Como Estamos <span className="text-accent">Mudando Isso</span>
        </h2>
        <p className="text-xl text-center text-muted mb-12 max-w-3xl mx-auto">
          Estamos criando conexões com hubs de inovação, agências e startups em todo o mundo, eliminando a barreira do idioma com ferramentas de IA e simplificando o processo de contratação.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-muted">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="container mx-auto py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte dessa <span className="text-primary">Mudança</span>
          </h2>
          <p className="text-xl mb-8 text-muted">
            Acesse a lista de espera agora mesmo. Pode ser que a nossa equipe entre em contato para conhecê-lo melhor em breve.
          </p>
          <WaitlistDialog />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Thank <span className="text-primary">you</span>.
            </h2>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-2 text-muted">
            <p className="font-bold text-white">Márcio Rodrigues | CEO, Brazilicode</p>
            <p>+55 11 99380 8641</p>
            <p>sales@brazilicode.com</p>
            <p>brazilicode.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;