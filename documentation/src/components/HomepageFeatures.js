import React from 'react';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx'

export default function HomepageFeatures() {
  return (
    <>
      <h1 className="text--center text--primary">What's in the Box? 📦</h1>
      <section>
        <div className="container">
          <div className={clsx('row row--align-center featureRow')}>
            <div className={clsx('col col--6 text--right')}>
              <img src={useBaseUrl('/img/Red.png')} alt="mockups" className={styles.mockups}/>
            </div>
            <div className={clsx('col col--6 ')}>
              <ul className="features">
                <li className="text--bold text--secondary text--uppercase text"><h3>Easy installation 👌</h3></li>
                <li className="text--bold text--secondary text--uppercase text"><h3>Typescript 💙 / Javascript 💛? You choose!!</h3></li>
                <li className="text--bold text--secondary text--uppercase text"><h3>State management has never been as easy as this!! ⚡</h3></li>
                <li className="text--bold text--secondary text--uppercase text"><h3>Internationalization 🌍</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Dark mode and multi-theming 🌗</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Flipper debugger ready 🐛</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Example included 📖</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Actively maintained by passionate developers 🏎️</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>open source (MIT) 📇</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
