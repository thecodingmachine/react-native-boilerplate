const colors = {
  red: 'border-red-300 dark:border-red-600',
  slate: 'border-slate-300 dark:border-slate-600',
  white: 'border-white dark:border-docusaurus-dark',
};

const animates = {
  'animate-circle': 'animate-circle',
  'animate-circle-delay-1': 'animate-circle-delay-1',
};

type Props = {
  animate?: keyof typeof animates;
  color?: keyof typeof colors;
};

function Circles({ animate = 'animate-circle', color = 'slate' }: Props) {
  const border = colors[color];
  const anim = animates[animate];
  return (
    <section className="relative flex items-center justify-center">
      <div
        className={`absolute ${anim} w-[550px] h-[550px] rounded-full border ${border}`}
      />
      <div
        className={`absolute ${anim} w-[500px] h-[500px] rounded-full border ${border}`}
      />
      <div
        className={`absolute ${anim} w-[450px] h-[450px] rounded-full border ${border}`}
      />
      <div
        className={`absolute ${anim} w-[400px] h-[400px] rounded-full border ${border}`}
      />
      <div
        className={`absolute ${anim} w-[350px] h-[350px] rounded-full border ${border}`}
      />
    </section>
  );
}

export default Circles;
