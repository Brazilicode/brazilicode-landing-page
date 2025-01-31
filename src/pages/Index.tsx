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

const benefits = [
  {
    icon: <Languages className="w-12 h-12 text-primary" />,
    title: "Live Translation & Transcription",
    description: "Remove language barriers with instant translations.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Access to Top Talent",
    description: "Pre-screened, highly qualified developers.",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Cultural Integration",
    description: "Tools that facilitate communication across different cultures.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Scalable Solutions",
    description: "Solutions for teams of any size.",
  },
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 flex justify-between items-center">
        <div className="text-primary text-2xl font-bold">Brazilicode</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="hover:text-primary transition-colors">{t('nav.features')}</a>
          <a href="#benefits" className="hover:text-primary transition-colors">{t('nav.benefits')}</a>
          <a href="#faq" className="hover:text-primary transition-colors">{t('nav.faq')}</a>
          <LanguageSelector />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <h1
  className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn"
  dangerouslySetInnerHTML={{
    __html: t('hero.title')
      .replace('Barreiras', `<span class="text-primary">Barreiras</span>`)
      .replace('Mundo', `<span class="text-primary">Mundo</span>`)
      .replace('Barriers', `<span class="text-primary">Barriers</span>`)
      .replace('Bridges', `<span class="text-primary">Bridges</span>`),
  }}
></h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fadeIn">
          {t('hero.subtitle')}
        </p>
        <WaitlistDialog />
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('solution.title')}</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t('solution.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('benefits.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('faq.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(t('faq.questions', { returnObjects: true })).map(([key, faq]: [string, any]) => (
              <AccordionItem key={key} value={key} className="bg-white/5 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="container mx-auto py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Thank <span className="text-primary">you</span>.
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
          <div className="space-y-2 text-gray-300">
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
