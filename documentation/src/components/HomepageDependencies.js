import React from 'react';
import clsx from 'clsx';
import styles from './HomepageDependencies.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const DependencyList = [
  {
    title: 'Redux',
    Svg: require('../../static/img/dependencies/redux.svg').default,
  },
  {
    title: 'React-Navigation',
    Svg: require('../../static/img/dependencies/react-navigation.svg').default,
  },
  {
    title: 'Flipper',
    path: '/img/dependencies/flipper.png',
  },
  {
    title: 'Prettier',
    Svg: require('../../static/img/dependencies/prettier.svg').default,
  },
  {
    title: 'Eslint',
    Svg: require('../../static/img/dependencies/eslint.svg').default,
  },
  {
    title: 'I18next',
    Svg: require('../../static/img/dependencies/i18next.svg').default,
  },
];

function Dependency({Svg, path, title}) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        { path && <img className={styles.dependencySvg} src={useBaseUrl(path)} alt={title}/> }
        { Svg && <Svg className={styles.dependencySvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <p className="text--bold text--secondary">{title}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <h1 className="text--center text--primary">Based on solid libraries 🏗️</h1>
      <section className={styles.dependencies}>
        <div className="container">
          <div className="row">
            {DependencyList.map((props, idx) => (
              <Dependency key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>

  );
}
