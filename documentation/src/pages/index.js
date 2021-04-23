/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageQualities from '../components/HomepageQualities';
import HomepageDependencies from '../components/HomepageDependencies';
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--outline button--lg"
          to="/docs/Introduction">
          Getting started 🚀
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Light Simple and Scalable ${siteConfig.title} by TheCodingMachine`}
      description="A React Native template for building solid applications, using JavaScript or Typescript (YOU choose).">
      <HomepageHeader />
      <main>
        <HomepageQualities />
        <HomepageDependencies />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
