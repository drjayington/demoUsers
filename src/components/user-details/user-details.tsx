import { getUser } from "@/actions/actions";
import styles from "./user-details.module.scss";
import Link from "next/link";

interface UserDetailsProps {
    id: string;
}

export default async function UserDetails({id}:UserDetailsProps) {
    const user = await getUser(parseInt(id));

    return (      
        <div className={styles.user}>     
            <Link className={styles.back} href={"/"}>⬅️</Link>
            {   user !== null ? <>
                    <div className={styles.row}>
                        <strong className={styles.label}>Name:</strong>
                        <span>{user.name}</span>
                    </div>
                    <div className={styles.row}>
                        <strong className={styles.label}>Email:</strong>
                        <span>{user.email}</span>
                    </div>
                </> 
                :   <span>not found</span>
            }
        </div>
    );
}