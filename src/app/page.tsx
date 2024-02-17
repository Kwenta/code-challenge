"use client";

import PerpsMarketList from "./components/perps-market-list/PerpsMarketList";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles.main}>
    <PerpsMarketList/>
  </main>;
}
