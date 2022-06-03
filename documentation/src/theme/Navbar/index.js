import React, { useEffect } from 'react';
import Navbar from '@theme-original/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from '@docusaurus/theme-common';

export default function NavbarWrapper(props) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const element = document.querySelector('html');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const html = document.documentElement;
          const needOverride = colorMode === 'dark' && !html.classList.contains('dark');
          if (needOverride) {
            html.classList.add('dark');
          }
        }
      });
    });

    observer.observe(element, {
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  });

  useEffect(() => {
    const html = document.documentElement;
    if (colorMode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [colorMode]);

  return <Navbar {...props} />;
}
