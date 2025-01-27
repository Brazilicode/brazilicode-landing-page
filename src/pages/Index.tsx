import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Stats } from "@/components/Stats";
import { Globe, Video, MessageSquare, Languages, Lock, Users, Brain, Zap } from "lucide-react";
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

const faqs = [
  {
    question: "How does real-time translation work?",
    answer: "Our AI-powered tools provide instant translations during chats and video calls, ensuring clear communication.",
  },
  {
    question: "Can I download chat transcriptions?",
    answer: "Yes, all chats and video transcriptions are available for download in multiple languages.",
  },
  {
    question: "What industries do you cater to?",
    answer: "We specialize in connecting tech companies with top Brazilian developers but are open to other sectors.",
  },
  {
    question: "How secure is the platform?",
    answer: "We use end-to-end encryption to ensure all communications and data are secure.",
  },
  {
    question: "What's the onboarding process like?",
    answer: "It's quick and seamless! You can start collaborating with talent in under two weeks.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 flex justify-between items-center">
        <div className="text-primary text-2xl font-bold">Brazilicode</div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Break <span className="text-primary">Barriers</span>,<br />
          Build <span className="text-primary">Bridges</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fadeIn">
          Real-time chat, transcription, and translation. Unlock Brazil's top tech talent with seamless communication.
        </p>
        <WaitlistDialog />
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Communication Without Limits</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Brazilicode offers real-time chat, transcription, and translation with video integration, enabling seamless collaboration between global companies and top-tier Brazilian developers.
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
          The Platform Designed for Global Collaboration
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
          Got Questions? We've Got Answers
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-lg px-6">
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

      {/* Footer */}
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