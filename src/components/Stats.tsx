interface StatProps {
  number: string;
  description: string;
}

function Stat({ number, description }: StatProps) {
  return (
    <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="text-4xl font-alata font-bold text-secondary mb-2">{number}</div>
      <div className="font-mono text-gray-300">{description}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <Stat number="400,000+" description="Desenvolvedores Brasileiros" />
      <Stat number="$200B" description="Tamanho do Mercado" />
      <Stat number="1,000+" description="Desenvolvedores Ativos" />
    </div>
  );
}