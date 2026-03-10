import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Vietnamese Text-to-Speech with Instant Voice Cloning">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            <div className="row">
              <div className="col col--4" style={{padding: '1rem'}}>
                <Heading as="h3">Instant Voice Cloning</Heading>
                <p>Clone any voice with just 3-5 seconds of reference audio. Zero-shot, no fine-tuning needed.</p>
              </div>
              <div className="col col--4" style={{padding: '1rem'}}>
                <Heading as="h3">Fully Offline</Heading>
                <p>Runs entirely on-device. No cloud API, no internet required after model download.</p>
              </div>
              <div className="col col--4" style={{padding: '1rem'}}>
                <Heading as="h3">Multiple Backends</Heading>
                <p>PyTorch GPU, GGUF CPU, LMDeploy, Remote API. Choose what fits your hardware.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
