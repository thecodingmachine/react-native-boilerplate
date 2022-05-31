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
        A simple starter kit with basic and well known dependencies.
      </>
    ),
  },
  {
    title: 'Lightweight',
    icon: '🍃',
    color: 'green',
    description: (
      <>
        It contains only the minimum amount of code for awesome apps.
      </>
    ),
  },
  {
    title: 'TypeScript or JavaScript?',
    icon: '🎛️',
    color: 'cyan',
    description: (
      <>
        For us it&apos;s important to let you choose your code base language.
      </>
    ),
  },
  {
    title: 'Scalable',
    icon: '🧱',
    color: 'orange',
    description: (
      <>
        You can easily add more features to your app and scale it up.
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
        <h3 className="font-bold mb-4">{title}</h3>
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

      <svg className="bottom-0 w-full sm:-mt-20 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="current" fillOpacity="1" d="M0,320L60,272C120,224,240,128,360,128C480,128,600,224,720,234.7C840,245,960,171,1080,122.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </section>
  );
}
