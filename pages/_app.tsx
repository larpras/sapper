import { SSRProvider, OverlayProvider } from "react-aria";
import "@styles/global.css";
import type { AppProps } from "next/app";
import ResizeHandler from "@components/resize-handler";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
      </OverlayProvider>
    </SSRProvider>
  );
}
