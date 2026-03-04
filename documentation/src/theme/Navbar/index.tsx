import { useColorMode } from '@docusaurus/theme-common';
import Navbar from '@theme-original/Navbar';
import { useEffect } from 'react';

export default function NavbarWrapper(props) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const element = document.querySelector('html');

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          const html = document.documentElement;
          const needOverride = colorMode === 'dark' && !html.classList.contains('dark');
          if (needOverride) {
            html.classList.add('dark');
          }
        }
      }
    });

    if (element) {

observer.observe(element, {
      attributes: true,
    });
  }

    return () => {
      observer.disconnect();
    };
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', colorMode === 'dark');
  }, [colorMode]);

  return <Navbar {...props} />;
}
