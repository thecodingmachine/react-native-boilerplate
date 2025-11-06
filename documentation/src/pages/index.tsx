import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="StableJack"
      description="The wisdom of Jack, the intelligence of AI."
      wrapperClassName="relative overflow-hidden"
    >
      <div
        className="flex flex-col justify-center items-center text-center h-screen w-full px-6"
        style={{
          backgroundColor: '#121212',
          color: '#D6FE51',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Logo / Brand name */}
        <div className="flex items-center space-x-2 mb-8">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: '#D6FE51' }}
          ></div>
          <h1 className="text-2xl font-semibold tracking-wide">StableJack</h1>
        </div>

        {/* Tagline */}
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-4"
          style={{ color: '#D6FE51' }}
        >
          The wisdom of Jack,
        </h2>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">
          the intelligence of AI.
        </h2>

        {/* Minimal glowing hand image (placeholder for now) */}
        <div className="mb-16 opacity-80">
          <img
            src="/img/stablejack_hand.webp"
            alt="AI hand visual"
            className="w-72 md:w-[500px] object-contain"
          />
        </div>

        {/* CTA Button */}
        <Link
          to="/docs/getting-started"
          className="text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
          style={{
            backgroundColor: '#D6FE51',
            boxShadow: '0 0 30px rgba(214, 254, 81, 0.3)',
          }}
        >
          Launch the Wisdom
        </Link>
      </div>
    </Layout>
  );
}
