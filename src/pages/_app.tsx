
import { AuthInitProvider } from "@/shared/providers/AuthProvider";
import { ReactQueryProvider } from "@/shared/providers/reactQuery";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <AuthInitProvider>
        <Component {...pageProps} />
      </AuthInitProvider>
    </ReactQueryProvider>
  );
}
