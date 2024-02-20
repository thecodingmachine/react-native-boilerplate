import React from 'react';

type FeatureItem = {
  title: string;
  icon: string
  color: string
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    icon: '👌',
    color: 'yellow',
    description: (
      <>
        A straightforward starter kit equipped with essential and widely recognized dependencies.
      </>
    ),
  },
  {
    title: 'Lightweight',
    icon: '🍃',
    color: 'green',
    description: (
      <>
        It includes just the bare minimum code required to create amazing apps.
      </>
    ),
  },
  {
    title: 'TypeScript or JavaScript?',
    icon: '🎛️',
    color: 'cyan',
    description: (
      <>
        We believe in giving you the freedom to select your preferred codebase language.
      </>
    ),
  },
  {
    title: 'Scalable',
    icon: '🧱',
    color: 'orange',
    description: (
      <>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Effortlessly expand your app's capabilities and scale it up as needed.
      </>
    ),
  },
];

const colors = {
  yellow: 'bg-yellow-300 shadow-xl shadow-yellow-500/50',
  green: 'bg-green-400 shadow-xl shadow-green-500/50',
  orange: 'bg-orange-400 shadow-xl shadow-orange-500/50',
  cyan: 'bg-cyan-400 shadow-xl shadow-cyan-500/50',
};

function Feature({
  title, icon, color, description,
}: FeatureItem) {
  const colorClass = colors[color];
  return (
    <div
      className="
        transition-all
        ease-in
        flex
        items-center
        bg-slate-100/40
        dark:bg-slate-800/40
        backdrop-blur-xl
        rounded-xl
        p-4
        hover:shadow-xl
        hover:cursor-pointer
     "
    >
      <div
        className={`
          flex 
          items-center 
          justify-center 
          ${colorClass} 
          border-sm 
          w-[50px] 
          h-[50px] 
          min-w-[50px] 
          min-h-[50px] 
          mr-4 
          rounded-xl
        `}
      >
        <p className="text-2xl">{icon}</p>
      </div>
      <div className="flex flex-col">
        <div className="font-bold mb-4">{title}</div>
        <p className="text-xs text-slate-500 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:px-16 sm:pb-16 pt-0">
        {FeatureList.map((props, idx) => (
          <Feature key={`feature-${idx}`} {...props} />
        ))}
      </div>
    </section>
  );
}
