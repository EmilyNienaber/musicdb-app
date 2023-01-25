import React from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.contentBase}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
