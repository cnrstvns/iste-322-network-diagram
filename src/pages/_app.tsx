import type { AppProps } from 'next/app';

import 'reactflow/dist/style.css';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
