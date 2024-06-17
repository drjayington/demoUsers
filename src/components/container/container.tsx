
import Image from "next/image";
import styles from "./container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    url: string;
    width?: number;
    height?: number;
}

export default function Container({ url, children, width = 270, height = 225 }: ContainerProps){
     return( <div className={styles.layout}>
                <Image 
                        src={url}
                        alt="user image"
                        width={width}
                        height={height}
                        className={styles.image}
                    />
                <div className={styles.card}>
                     {children}
                </div>
            </div> );
} 