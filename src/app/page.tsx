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
        <div className={styles.logoWrapper}>
          <Image
            src="/Logo_light_1.png"
            alt="The Web Labs Logo"
            width={500}
            height={200}
            priority
            className={styles.logo}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <p className={styles.subtitle}>Something Special is Coming Soon</p>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </main>
  );
}
