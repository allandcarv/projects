import { Sidebar } from '../../components/Sidebar/Sidebar';

import styles from './Home.module.css';

export function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
