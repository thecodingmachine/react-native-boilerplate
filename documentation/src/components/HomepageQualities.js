import React from 'react';
import clsx from 'clsx';
import styles from './HomepageQualities.module.css';

const QualityList = [
  {
    title: 'Easy to Use 👌',
    description: (
      <>
        A simple starter kit with basic and well known dependencies.
        We provide an easy to understand example
      </>
    ),
  },
  {
    title: 'Small to Big 📱',
    description: (
      <>
        A light Starterkit with solid bases to build small and large application.
        We decided to use only necessary dependencies but strong ones.
      </>
    ),
  },
  {
    title: 'Powered by RN Lovers 💙',
    description: (
      <>
        We love working on React Native ! Join the adventure 😉
      </>
    ),
  },
];

function Quality({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h2 className="text--secondary">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageQualities() {
  return (
    <section className={styles.qualities}>
      <div className="container">
        <div className="row">
          {QualityList.map((props, idx) => (
            <Quality key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
