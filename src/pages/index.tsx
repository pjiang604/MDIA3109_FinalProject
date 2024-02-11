import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/Landing.module.css'

export default function Landing() {

  const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
		const handleComplete = () => {
			setTimeout(() => {
				setLoading(false);
				router.push('/logIn');
        // console.log("loading...")
			},2000)
		};

    handleComplete()
    },[loading]);
    
    return (
        <div className={styles.container}>
            { loading &&  
              <div className={styles.info}>
                <Image
                    src="/Logo/logo.png"
                    alt="logo"
                    height={354}
                    width={360}
                />
                <div>
                  <div className={styles.loading_dots}></div>
                  <div className={styles.loading_dots}></div>
                  <div className={styles.loading_dots}></div>
                  <div className={styles.loading_dots}></div>
                </div>
              </div>
            }
        </div>
    )
}
