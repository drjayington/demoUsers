"use client"

import Link from "next/link"
import styles from './error.module.scss';
import { useTranslations } from "next-intl";

export default function ErrorPage() {
    const t = useTranslations('Error');

    return (
        <article className={styles.error}>
            <h2>{t('Error')}</h2>
            <Link href={"/"}>{t('Return')}</Link>
        </article>
    );
}