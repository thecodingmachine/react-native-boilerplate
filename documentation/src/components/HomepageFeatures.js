import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <>
      <h1 className="text--center text--primary">What's in the Box ? 📦</h1>
      <section>
        <div className="container">
          <div className={styles.featuresRow}>
            <div className="col--6">
              <img src="../../static/img/Red.png" alt="mockups" className={styles.mockups}/>
            </div>
            <div className="col--6">
              <ul className="features">
                <li className="text--bold text--secondary text--uppercase text"><h3>Internationalization 🌍</h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Dark mode and multi-theming 🌗 </h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Example included 📖 </h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>Up to date 🏎️ </h3></li>
                <li className="text--bold text--secondary text--uppercase"><h3>open source (MIT) 📇</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
