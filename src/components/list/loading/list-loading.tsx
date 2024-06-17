import Loading from "@/components/loading/loading"
import styles from "./list-loading.module.scss";

export default function LoadingList() {
    return (
        <div className={ styles.card + ' ' + styles.loading }> 
            <Loading width={280} height={30}/>
            <Loading width={280} height={30}/>
            <Loading width={280} height={30}/>
        </div>
    );
}