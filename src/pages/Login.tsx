import React from "react";
import styles from '../App.module.scss';

class Login extends React.Component {
  render(){
    const { container, header, main, footer } = styles
    return (
      <div className={container}>
        <header className={header}>
          
        </header>
        <main className={main}></main>
        <footer className={footer}></footer>
      </div>
    )
  }
}

export default Login
