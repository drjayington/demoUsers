import styles from "./header.module.scss"
import NavItem from "./nav-item/nav-item";
import {getTranslations} from 'next-intl/server';

export default async function Header() {    
    const t = await getTranslations('Component');
    
    return (
    <div className={styles.header}>
        <h1>{t('Header.Users')}</h1>
        <nav>
            <ul>
                <NavItem reference={"/"} name={t('Header.Users')}></NavItem>
                <NavItem reference={"/user/add"} name={t('Header.AddUser')}></NavItem>
            </ul>
        </nav>
    </div>
    );
}