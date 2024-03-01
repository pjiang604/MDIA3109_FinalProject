import { PuffLoader } from "react-spinners"
import styles from './Loading.module.css'

export default function Loading() {
    return(
        <main className={`relative`}>
        <PuffLoader
          color="#990F4B"
          className={styles.loading}
        />
      </main>
    )
}