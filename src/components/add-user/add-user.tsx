"use client"

import { validationSchema } from "@/utils/validations";
import styles from "./add-user.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslations } from "next-intl";
import {toast} from "react-hot-toast";
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl';

interface FormValues {
    name: string;
    email: string;
}

const initialValues: FormValues = {
    name: '',
    email: ''
};

interface AddUserProps {
    addUser: (formData: FormData) => Promise<string>;
}

export default function AddUser({addUser}: AddUserProps) {    
    const t = useTranslations('Component');
    const locale = useLocale();
    const router = useRouter();

    return (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={
                async (values, { setSubmitting }) => {
                    setSubmitting(false);
                    const formData = new FormData();
                    for (const key in values) {
                        const value = values[key as keyof FormValues];
                        if(value) {
                            formData.append(key, value);
                        }
                    }
                    try {
                        await addUser(formData);                        
                        toast(t('AddUser.success') + values['name']);
                        router.push(`/${locale}/`);
                        
                    } catch(e) {
                        toast.error(t('AddUser.error') + values['name']);
                    }
                }
            }
          >            
            <Form className={styles['add-form']}>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">{t('AddUser.Name')}</label>
                    <Field name="name" type="text" />
                </div>
                <ErrorMessage className={styles.error} name="name" component="div" />
                        
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">{t('AddUser.Email')}</label>
                    <Field name="email" type="email" />
                </div>
                <ErrorMessage className={styles.error} name="email" component="div" />
                      
                <button className={styles.submit} type="submit">{t('AddUser.Submit')}</button>
            </Form>     
          </Formik>
      );
}