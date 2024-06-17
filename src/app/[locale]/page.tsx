import List from "@/components/list/list";
import styles from './page.module.scss';
import { Suspense } from "react";
import ListLoading from "@/components/list/loading/list-loading";
import { useTranslations } from "next-intl";

export default function page() {    
    const t = useTranslations('Users');

    return (
        <main>    
            <h1 className={styles.title}>{t('Registered')}</h1>    
            <Suspense fallback={<ListLoading/>}> 
                <List/>
            </Suspense> 
        </main>
    );
}