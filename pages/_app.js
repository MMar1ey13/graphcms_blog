import React, { useEffect, useState} from 'react';
import { Layout } from '@/components';
import 'tailwindcss/tailwind.css'; 
import '@/styles/globals.scss'
import analytics from '@vercel/analytics';

// Initialize Vercel Analytics with your project ID
analytics.init({ projectId: 'prj_5TOgyhuqujwnhpcV7hTFJab1EXJR' });


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
