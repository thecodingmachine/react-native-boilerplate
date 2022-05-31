import React, { useEffect } from 'react';
import Navbar from '@theme-original/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from '@docusaurus/theme-common';

export default function NavbarWrapper(props) {
  const { colorMode } = useColorMode();

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
