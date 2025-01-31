import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Stats } from "@/components/Stats";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Globe, Clock, DollarSign, Target, Bot, Users, Network, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const challenges = [
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "Salários Desvalorizados",
    description: "Recebem em real, uma moeda fraca, o que reduz sua competitividade no mercado global.",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Carga Excessiva",
    description: "Muitos trabalham 12 a 14 horas por dia, o que pode levar ao burnout.",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Barreiras Internacionais",
    description: "Enfrentam obstáculos linguísticos, culturais e burocráticos para oportunidades globais.",
  },
];

const solutions = [
  {
    icon: <Network className="w-12 h-12 text-secondary" />,
    title: "Conexões Globais",
    description: "Parcerias com hubs de inovação, agências e startups internacionais.",
  },
  {
    icon: <Bot className="w-12 h-12 text-secondary" />,
    title: "Barreiras Eliminadas",
    description: "Uso de IA para superar desafios linguísticos e facilitar a contratação.",
  },
  {
    icon: <Users className="w-12 h-12 text-secondary" />,
    title: "Comunidade Forte",
    description: "Ambiente colaborativo para compartilhar experiências e construir reputação.",
  },
];

const faqItems = [
  {
    question: "Como funciona a tradução em tempo real?",
    answer: "Nossa tecnologia baseada em IA traduz mensagens e chamadas instantaneamente, permitindo uma comunicação natural e eficiente entre desenvolvedores e empresas globais."
  },
  {
    question: "Quais são os benefícios de receber em dólar?",
    answer: "Além da valorização cambial, você tem acesso a salários competitivos internacionalmente e maior poder de compra, aumentando significativamente sua renda."
  },
  {
    question: "Como vocês garantem a qualidade das oportunidades?",
    answer: "Fazemos uma curadoria rigorosa das empresas parceiras, garantindo projetos relevantes, pagamentos justos e ambiente de trabalho saudável."
  },
  {
    question: "Qual o processo de onboarding?",
    answer: "O processo é simples e rápido: cadastro, verificação de perfil, matching com oportunidades e início dos trabalhos, tudo com suporte personalizado."
  }
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 flex justify-between items-center">
        <div className="text-primary text-2xl font-alata">Brazilicode</div>
        <nav className="hidden md:flex gap-8 items-center font-mono">
          <a href="#challenges" className="hover:text-primary transition-colors">Desafios</a>
          <a href="#solutions" className="hover:text-primary transition-colors">Soluções</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <LanguageSelector />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <h1 className="font-alata text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Conectando <span className="text-primary">Devs Brasileiros</span> ao <span className="text-secondary">Mundo</span>
        </h1>
        <p className="font-mono text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fadeIn">
          Junte-se à comunidade que está exportando serviços para o mundo todo.
        </p>
        <WaitlistDialog />
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 bg-gradient-to-b from-dark to-dark/90">
        <div className="container mx-auto text-center">
          <h2 className="font-alata text-3xl md:text-4xl font-bold mb-12">O Desafio dos Devs Brasileiros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{challenge.icon}</div>
                <h3 className="font-alata text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="font-mono text-gray-300">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto py-20">
        <h2 className="font-alata text-3xl md:text-4xl font-bold mb-12 text-center">
          Como Estamos Mudando Isso
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="font-alata text-xl font-bold mb-2">{solution.title}</h3>
              <p className="font-mono text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto py-20">
        <Stats />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto py-20">
        <h2 className="font-alata text-3xl md:text-4xl font-bold mb-12 text-center">
          Perguntas Frequentes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="font-alata text-xl font-bold mb-3 text-primary">{item.question}</h3>
              <p className="font-mono text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="container mx-auto py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-alata text-4xl font-bold mb-4">
              Obrigado por <span className="text-primary">confiar</span>.
            </h2>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-2 text-gray-300 font-mono">
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