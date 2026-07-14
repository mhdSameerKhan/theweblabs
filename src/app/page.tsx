import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | We Are Building Something Awesome',
  description: 'Our new website is under construction. Check back soon for updates!',
};

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.content}>
        <div className={styles.badge}>Coming Soon</div>
        
        <h1 className={styles.title}>
          We are building<br />something awesome
        </h1>
        
        <p className={styles.subtitle}>
          Our website is currently under construction. We're working hard to give you the best experience. Stay tuned!
        </p>
        
        <div className={styles.dots} aria-hidden="true">
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </main>
  );
}
