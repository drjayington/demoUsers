"use client"
import {Link} from './../../../navigation';
import { usePathname } from "next/navigation";
import styles from "./nav-item.module.scss";

interface navItemProps {
    reference: "/" | "/user/add";
    name: string
}

export default function NavItem({reference, name}:navItemProps) {
    const activePathName = usePathname();

    let isActive = activePathName.length === 3 && reference === '/';
    if(!isActive) {
        const pathAfterLocaleIndex = activePathName.indexOf('/', 1 );
        const pathAfterLocale = pathAfterLocaleIndex !== 0 ? activePathName.substring(pathAfterLocaleIndex) : 'N/A';
        isActive = pathAfterLocale === reference;
    } 
    
    return (<li key={name} className={isActive ? styles.current : ''}>
                <Link 
                    className={styles.item} 
                    href={reference}
                >
                    {name}
                </Link>
            </li>);
}