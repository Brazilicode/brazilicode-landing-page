interface StatProps {
  number: string;
  description: string;
}

function Stat({ number, description }: StatProps) {
  return (
    <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted">{description}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <Stat number="400,000+" description="Brazilian Developers" />
      <Stat number="$200B" description="Market Size" />
      <Stat number="1,000+" description="Active Developers" />
    </div>
  );
}