import { getDataHome } from "@/utils/actions/get-data";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getDataHome()
  console.log(JSON.stringify(data, null, 2));

  return (
    <div className={styles.page}>
      <h1>tattoo</h1>
    </div>
  );
}
