import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Web Labs | Coming Soon',
  description: 'Something special is coming soon.',
};

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <Image
          src="/Logo_light_1.png"
          alt="The Web Labs Logo"
          width={200}
          height={200}
          priority
          className={styles.logo}
        />

        <h1 className={styles.brandText}>
          the<span className={styles.brandGreen}>web</span>labs
        </h1>

        <p className={styles.subtitle}>Coming Soon</p>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </main>
  );
}
