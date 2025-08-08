import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './utils/Router';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}
