import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Globe, Video, MessageSquare, Languages, Lock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/8fa1485b-2c5d-4ba9-8927-82bedd23dd75.png" alt="Brazilicode Logo" className="h-12 text-secondary" />
          <span className="text-2xl font-alata">Brazilicode</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-alata mb-6 animate-fadeIn">
          Brazilicode: <span className="text-primary">Conectando</span> Devs Brasileiros ao <span className="text-secondary">Mundo</span>
        </h1>
        <p className="font-mono text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fadeIn">
          Junte-se à comunidade que está exportando serviços para o mundo todo. Inscreva-se na lista de espera e seja o primeiro a saber das novidades.
        </p>
        <WaitlistDialog />
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/90">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-alata mb-12 text-center">
            O Desafio dos <span className="text-primary">Devs Brasileiros</span>
          </h2>
          <p className="font-mono text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Brazilian developers are outstanding. They thrive in a very hazardous environment, get paid from a very cheap currency, but still are used to working 14 hours/day, love to learn and work with purpose-driven businesses. Today, most of Brazilian developers want to work for the global market, but some things are hindering them.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-alata mb-12 text-center">
          Como Estamos <span className="text-secondary">Mudando Isso</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-dark/50 p-8 rounded-lg backdrop-blur-sm">
            <p className="font-mono text-gray-300 mb-6 leading-relaxed">
              Estamos criando conexões com hubs de inovação, agências e startups em todo o mundo, eliminando a barreira do idioma com ferramentas de IA e simplificando o processo de contratação para que a nossa comunidade de desenvolvedores possa acessar oportunidades em dólar.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-lg backdrop-blur-sm">
            <p className="font-mono text-gray-300 mb-6 leading-relaxed">
              Além disso, estamos criando um ambiente para que a comunidade possa compartilhar experiências e construir sua reputação de forma colaborativa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-alata mb-6">
            Faça Parte dessa <span className="text-primary">Mudança</span>
          </h2>
          <p className="font-mono text-xl mb-8 text-gray-300">
            Acesse a lista de espera agora mesmo. Pode ser que a nossa equipe entre em contato para conhecê-lo melhor em breve.
          </p>
          <WaitlistDialog />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-alata mb-4">
              Thank <span className="text-primary">you</span>.
            </h2>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
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