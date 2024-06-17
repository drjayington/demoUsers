import { deleteUser } from "@/actions/actions";
import styles from "./delete-button.module.scss";

interface DeleteUserProps{
    id: number;
}

export default function DeleteButton({id}: DeleteUserProps ) {
    return ( 
        <form action={deleteUser} className={styles['delete-form']} >
            <input type="hidden" name="id" value={id}/>
            <button className={styles.delete}>🗑️</button>
        </form>
    );
}