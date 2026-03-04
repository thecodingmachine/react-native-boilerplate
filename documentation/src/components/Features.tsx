const FeatureList = [
  {
    color: 'yellow',
    description:
      'A straightforward starter kit equipped with essential and widely recognized dependencies.',
    icon: '👌',
    title: 'Easy to Use',
  },
  {
    color: 'green',
    description:
      'It includes just the bare minimum code required to create amazing apps.',
    icon: '🍃',
    title: 'Lightweight',
  },
  {
    color: 'cyan',
    description:
      'We believe in giving you the freedom to select your preferred codebase language.',
    icon: '🎛️',
    title: 'TypeScript or JavaScript?',
  },
  {
    color: 'orange',
    description:
      "Effortlessly expand your app's capabilities and scale it up as needed.",
    icon: '🧱',
    title: 'Scalable',
  },
] as const;

const colors = {
  cyan: 'bg-cyan-400! shadow-xl! shadow-cyan-500/50!',
  green: 'bg-green-400! shadow-xl! shadow-green-500/50!',
  orange: 'bg-orange-400! shadow-xl! shadow-orange-500/50!',
  yellow: 'bg-yellow-300! shadow-xl! shadow-yellow-500/50!',
};

export default function HomepageFeatures() {
  return (
    <section className="relative!">
      <div className="grid! grid-cols-1! md:grid-cols-2! gap-4! p-5! sm:px-16! sm:pb-16! pt-0!">
        {FeatureList.map((props, index) => (
          <Feature key={`feature-${index}`} {...props} />
        ))}
      </div>
    </section>
  );
}

function Feature({
  color,
  description,
  icon,
  title,
}: (typeof FeatureList)[number]) {
  const colorClass = colors[color];
  return (
    <div
      className="
        transition-all!
        ease-in!
        flex!
        items-center!
        bg-slate-100/40!
        dark:bg-slate-800/40!
        backdrop-blur-xl!
        rounded-xl!
        p-4!
        hover:shadow-xl!
     "
    >
      <div
        className={`
          flex!
          items-center!
          justify-center!
          ${colorClass}
          border-sm!
          w-12.5!
          h-12.5!
          min-w-12.5!
          min-h-12.5!
          mr-4!
          rounded-xl!
        `}
      >
        <p className="text-2xl! mb-0!">{icon}</p>
      </div>
      <div className="flex! flex-col!">
        <div className="font-bold! mb-4!">{title}</div>
        <p className="text-xs! text-slate-500! dark:text-slate-300! mb-0!">
          {description}
        </p>
      </div>
    </div>
  );
}
