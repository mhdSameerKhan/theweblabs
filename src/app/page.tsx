import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Web Labs | Coming Soon',
  description: 'Something clean and simple is coming.',
};

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>The Web Labs</h1>
        <p className={styles.subtitle}>Coming Soon</p>
      </div>
    </main>
  );
}
