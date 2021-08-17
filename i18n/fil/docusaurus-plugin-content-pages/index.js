import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import Head from '@docusaurus/Head';

const features = [
  {
    title: <Translate>Easy to Use</Translate>,
    imageUrl: 'img/undraw_easy.svg',
    description: (
      <Translate>
        Simplicity is in its name. SNAP Hydroponics was designed to make it
        snap for everyone to get started on hydroponics.
      </Translate>
    ),
  },
  {
    title: <Translate>Low-cost</Translate>,
    imageUrl: 'img/undraw_low_cost.svg',
    description: (
      <Translate>
        SNAP Hydroponics doesn’t require additional tools like pH and TDS meters
        and supplies such as pH adjustment kits. It just works.
      </Translate>
    ),
  },
  {
    title: <Translate>Business Ready</Translate>,
    imageUrl: 'img/undraw_business.svg',
    description: (
      <Translate>
        The same basic setup can be adapted to work as a small-scale commercial
        farm or upgraded to more production intensive hydroponic setups.
      </Translate>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Alamin kung paano mag-hydroponics sa mabilis at madaling paraan"
      description="Kumprehensibo at madaling sundang step-by-step na gabay kung paano mag-setup ng payak na sistemang hydroponics gamit ang SNAP Hydroponics."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Mánwal ng SNAP Hydroponics</h1>
          <p className="hero__subtitle">Ligtas, madaling gamitin at abot-kayang sistemang hydroponics na angkop para sa pangtahanan at maliit na komersiyal na produksiyon ng gulay.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <Translate>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
