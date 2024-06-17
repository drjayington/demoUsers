import { addUser } from "@/actions/actions";
import styles from "./page.module.scss";
import AddUser from "@/components/add-user/add-user";
import { useTranslations } from "next-intl";
import Container from "@/components/container/container";

export default function page() {    
    const t = useTranslations('AddUser');

    return (
        <main>     
            <h1 className={styles.title}>{t('AddUser')}</h1>
            <Container url={'/add.png'}>
                <AddUser addUser={addUser}/>
            </Container>           
        </main>
    );
}