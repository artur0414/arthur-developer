import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/[locale]/fonts";
import Menu from "@/components/menu/menu";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Cursor from "@/components/ui/cursor";
import { SupportedLocale } from "@/types/Locale";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Arthur Developer",
  description:
    "Web developer passionate about creating seamless user experiences with React, Tailwind, and TypeScript, ensuring fast, responsive websites for optimal performance.",
  // Open Graph metadata
  openGraph: {
    title: "Arthur Developer",
    description:
      "Web developer specializing in React, Tailwind, and TypeScript, creating fast, responsive user experiences optimized for exceptional performance.",
    url: "https://www.tusitio.com",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="description"
          content="Web developer passionate about creating seamless user experiences with React, Tailwind, and TypeScript, ensuring fast, responsive websites for optimal performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="Epz8IMUZVzsxVI7EhyfTUy5vgIy5G397I9LXV8GNqtc"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased w-screen h-[100dvh] flex bg-custom-white flex-col scroll-smooth`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Menu />
        </NextIntlClientProvider>
        <Cursor />
      </body>
      <Analytics /> 
    </html>
  );
}
