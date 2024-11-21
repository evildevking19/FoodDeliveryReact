import Head from "next/head";
import { ReactNode } from "react";
import SideNav from "./SideNav";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Eatsome - Restaurant & Food Delivery</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
      <SideNav />
    </>
  );
}
