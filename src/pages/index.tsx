import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const features = [
  {
    icon: '🎙️',
    title: 'Instant Voice Cloning',
    description: 'Clone any voice with just 3-5 seconds of reference audio. Zero-shot — no fine-tuning needed.',
  },
  {
    icon: '⚡',
    title: 'Real-time Streaming',
    description: 'Audio playback starts before the sentence finishes. Under 300ms latency on modern CPUs.',
  },
  {
    icon: '🔒',
    title: 'Fully Offline',
    description: 'Runs entirely on-device. No cloud API, no internet required after model download.',
  },
  {
    icon: '🧠',
    title: 'Multiple Models',
    description: 'From 0.5B (best quality) to Q4 quantized (extreme speed). Pick what fits your hardware.',
  },
  {
    icon: '🌏',
    title: 'Vietnamese + English',
    description: 'Native Vietnamese with seamless code-switching to English within the same sentence.',
  },
  {
    icon: '🔧',
    title: 'Flexible Backends',
    description: 'PyTorch, GGUF, LMDeploy, Remote API, Intel XPU. One SDK, many deployment options.',
  },
];

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
          <Link className="button button--secondary button--lg" to="/docs">
            Get Started
          </Link>
          <Link
            className={clsx('button button--lg', styles.buttonOutline)}
            to="https://github.com/pnnbao97/VieNeu-TTS">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({icon, title, description}: {icon: string; title: string; description: string}) {
  return (
    <div className="col col--4" style={{padding: '0.75rem'}}>
      <div className="feature-card">
        <span className="feature-icon">{icon}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className="row">
          <div className="col col--5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Heading as="h2">Simple Python API</Heading>
            <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)'}}>
              Three lines to generate speech. Supports voice cloning, streaming, batch processing, and more.
            </p>
            <div>
              <Link className="button button--primary button--md" to="/docs/sdk/overview">
                Explore the SDK
              </Link>
            </div>
          </div>
          <div className="col col--7">
            <pre className={styles.codeBlock}>
              <code>{`from vieneu import Vieneu

tts = Vieneu()
audio = tts.infer(text="Xin chào bạn!")
tts.save(audio, "output.wav")`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Vietnamese Text-to-Speech with Instant Voice Cloning">
      <HomepageHeader />
      <main>
        <section className="features-section">
          <div className="container">
            <div className="row">
              {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </section>
        <CodeExample />
      </main>
    </Layout>
  );
}
