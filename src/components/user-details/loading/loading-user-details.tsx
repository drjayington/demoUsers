import Loading from "@/components/loading/loading";
import styles from "./loading-user-details.module.scss";

export default function LoadingUserDetails(){
    return (
        <div className={styles.loading}> 
            <Loading width={280} height={24}/>
            <Loading width={280} height={24}/>
        </div>
    );
}