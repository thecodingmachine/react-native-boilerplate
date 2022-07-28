import React, { useEffect, useState } from 'react';

type Theme = 'default' | 'default_dark' | 'premium' | 'premium_dark';

const colors = {
  cyan: 'border-cyan-500',
  indigo: 'border-indigo-500',
  amber: 'border-amber-500',
  green: 'border-green-500',
};

type Props = {
    color: keyof typeof colors
    onClick: () => void
    gutters?: boolean
    fonts?: boolean
    variables?: boolean
    layout?: boolean
    common?: boolean
    images?: boolean
}

function ThemeParams({
  color, onClick,
  gutters,
  fonts,
  variables,
  layout,
  common,
  images,
}: Props) {
  const colorClass = colors[color];
  return (
    <div className={`flex flex-wrap border-2 border-dashed ${colorClass}`}>
      <div className="grid gap-2 grid-cols-6 grid-rows-1">
        <div className="my-2">{gutters && <div className={`p-3 text-xs border ${colorClass}`}>Gutters</div>}</div>
        <div className="my-2">{fonts && <div className={`p-3 text-xs border ${colorClass}`}>Fonts</div>}</div>
        <div className="my-2">{variables && <div className={`p-3 text-xs border ${colorClass}`}>Variables</div>}</div>
        <div className="my-2">{layout && <div className={`p-3 text-xs border ${colorClass}`}>Layout</div>}</div>
        <div className="my-2">{common && <div className={`p-3 text-xs border ${colorClass}`}>Common</div>}</div>
        <div className="my-2">{images && <div className={`p-3 text-xs border ${colorClass}`}>Images</div>}</div>
      </div>
      <button
        type="button"
        className="my-2 hover:bg-neutral-700 hover:text-white hover:text text-xs text-white px-4 bg-neutral-800"
        onClick={onClick}
      >
        apply
      </button>
    </div>
  );
}

ThemeParams.defaultProps = {
  gutters: false,
  fonts: false,
  variables: false,
  layout: false,
  common: false,
  images: false,
};

type ThemeData = {
    theme: Theme
    color: keyof typeof colors
    props: {
        gutters?: boolean
        fonts?: boolean
        variables?: boolean
        layout?: boolean
        common?: boolean
        images?: boolean
    }
}
const themes: ThemeData[] = [
  {
    theme: 'default',
    color: 'cyan',
    props: {
      gutters: true,
      fonts: true,
      variables: true,
      layout: true,
      common: true,
      images: true,
    },
  },
  {
    theme: 'default_dark',
    color: 'indigo',
    props: {
      variables: true,
      images: true,
    },
  },
  {
    theme: 'premium',
    color: 'amber',
    props: {
      variables: true,
    },
  },
  {
    theme: 'premium_dark',
    color: 'green',
    props: {
      variables: true,
    },
  },
];

function ThemesOverride() {
  const [theme, setTheme] = useState<Theme>('default');

  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`@site/src/images/theme_${theme}.png`).then((data) => {
      setImage(data.default);
    });
  }, [theme]);

  return (
    <div className="flex">
      <div className="flex flex-col w-3/4">
        {
          themes.map(({ theme: t, color, props }) => (
            <div className="flex flex-col mb-2">
              <ThemeParams {...props} color={color} onClick={() => setTheme(t)} />
            </div>
          ))
       }
        <div className="flex flex-wrap border-2 border-dashed bg-gray-700">
          <div className="grid gap-2 grid-cols-6 grid-rows-1">
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Gutters</div>
            </div>
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Fonts</div>
            </div>
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Variables</div>
            </div>
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Layout</div>
            </div>
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Common</div>
            </div>
            <div className="my-2">
              <div className="p-3 text-xs border bg-gray-700">Images</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        {image && <img src={image} alt="theme" />}
      </div>
    </div>
  );
}

export default ThemesOverride;
