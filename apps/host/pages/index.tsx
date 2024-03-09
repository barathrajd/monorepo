'use client';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import React, { Suspense, lazy } from 'react';
const inter = Inter({ subsets: ['latin'] });
// import RemoteApp from 'remote/RemoteApp';
const RemoteApp = dynamic(async () => await import('remote/RemoteApp'));
// const RsbuildApp = lazy(() => import('rsbuildApp/RsbuildApp'));
// const RemoteAppRemote = lazy(() => import('remoteApp/RemoteAppRouter'));

export default function Home() {
  return (
    <main>
      Container
      <RemoteApp />
      {/* <RemoteAppRemote /> */}
      {/* <RsbuildApp /> */}
    </main>
  );
}
