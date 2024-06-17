"use server"

import styles from './list.module.scss'
import { getUsers } from "@/actions/actions";
import DeleteButton from './delete-button/delete-button';
import {Link} from './../../navigation';
import {getTranslations} from 'next-intl/server';
import Container from '../container/container';

export default async function List() {  
  const users = await getUsers();  
  const t = await getTranslations('Component');
  
  return (
    <Container url={'/delete.png'}>        
        <ul>
            {  
              users.length > 0 ? 
                users.map( user => {
                  return (
                    <li key={user.id}>
                      <DeleteButton id={user.id}></DeleteButton>
                      <Link 
                        className={styles.item} 
                        href={{
                          pathname: '/user/[id]',
                          params: { id:  user.id }
                        }}
                      >
                        {user.name}
                      </Link>
                    </li>
                  );
                })
              : <li>{t('List.NotRegistered')}</li>
            }
        </ul>
      </Container>
    );
}



