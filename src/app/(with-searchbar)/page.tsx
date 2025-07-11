import styles from "./page.module.css";
import Searchbar from "./search/layout";

export default function Home() {
  return (
    
    <div className={styles.page}>
      <Searchbar/>
      Index (page)
    </div>
  );
}
