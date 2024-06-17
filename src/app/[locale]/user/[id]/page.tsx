import styles from "./page.module.scss";
import { Suspense } from "react";
import UserDetails from "@/components/user-details/user-details";
import LoadingUserDetails from "@/components/user-details/loading/loading-user-details";
import Container from "@/components/container/container";

interface IProps{
    params: { id: string }
}

export default async function page({params}: IProps) {
    return (
        <article className={styles.user}>            
            <Container url={'/view.png'} width= {90} height={75} >     
                <Suspense fallback={<LoadingUserDetails/>}>
                    <UserDetails id={params.id}/>
                </Suspense>
            </Container>
        </article>
    );
}