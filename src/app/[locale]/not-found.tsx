import Link from "next/link"
import styles from './error.module.scss';
import { useTranslations } from "next-intl";


export default function NotFoundPage() {    
    const t = useTranslations('NotFound');

    return (
        <article className={styles.error}>
            <h2>{t('NotFound')}</h2>
            <Link href={"/"}>{t('Return')}</Link>
        </article>
    );
}