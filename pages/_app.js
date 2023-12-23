import React, { useEffect, useState} from 'react';
import { Layout, Navbar } from '@/components';
import 'tailwindcss/tailwind.css'; 
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
  <Layout> 
  <Component {...pageProps} />
  <Analytics />
  </Layout>
  )
}

export default MyApp