import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
