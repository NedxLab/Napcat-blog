import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Abel } from "@next/font/google";
import { AppThemeProvider } from "@/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const abel = Abel({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${abel.style.fontFamily};
        }
      `}</style>
      <AppThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>{" "}
      </AppThemeProvider>
    </>
  );
}
