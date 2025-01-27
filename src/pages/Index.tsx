import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Stats } from "@/components/Stats";
import { Globe, Code2, Languages } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto pt-6">
        <div className="text-primary text-2xl font-bold">Brazilicode</div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          <span className="text-primary">The Workana</span> for{" "}
          <span className="text-primary">Brazilian Developers</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fadeIn">
          Enabling 400,000 developers to tap into a US$ 200 billion economy.
        </p>
        <WaitlistDialog />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <Stats />
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Languages className="w-12 h-12 text-primary" />
            <h2 className="text-2xl font-bold">The Problem</h2>
            <p className="text-xl text-gray-300">
              99% of Brazil's developers are NOT English fluent.
            </p>
          </div>
          <div className="space-y-6 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <Globe className="w-12 h-12 text-secondary" />
            <h2 className="text-2xl font-bold">The Solution</h2>
            <p className="text-xl text-gray-300">
              Workana with live translation and transcription.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We charge 15% in exchange for a whole new world of opportunities.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            1,000 developers and 50 institutions already trust us.
          </p>
          <WaitlistDialog />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Thank <span className="text-primary">you</span>.
            </h2>
          </div>
          <div className="space-y-2">
            <p className="font-bold">Márcio Rodrigues</p>
            <p>Brazilicode</p>
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