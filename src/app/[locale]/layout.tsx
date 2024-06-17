import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import {unstable_setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import pick from 'lodash/pick';
import {Toaster} from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

const locales = ['en', 'de'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Users",
  description: "User Management",
};

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
       <body className={inter.className}> 
          <Header/>
          <NextIntlClientProvider
            locale={locale}
            messages={pick(messages, 'Error', 'Component')}
          >
            <Toaster position="top-right" reverseOrder={false}/> 
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}