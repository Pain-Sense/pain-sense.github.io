import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pain Measurement',
    Svg: require('@site/static/img/undraw_report_esij.svg').default,
    description: (
      <>
        Provides precise, data-driven insights into health thresholds using sensor technology.
      </>
    ),
  },
  {
    title: 'Real-Time Monitoring & Analysis',
    Svg: require('@site/static/img/undraw_data-trends_kv5v.svg').default,
    description: (
      <>
        Track and analyze health data in real time with IoT connectivity, enabling better diagnosis and treatment decisions.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_computer-apps_7v3q.svg').default,
    description: (
      <>
        Connect with existing medical systems and data platforms for a streamlined workflow.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
