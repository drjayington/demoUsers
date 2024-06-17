import styles from "./loading.module.scss";

interface loadingProps {
    width: number;
    height: number;    
}

export default function loading({width, height}: loadingProps) {
    return (
        <div 
            className={styles.skell}
            style={{width, height}}
        />
    );
}