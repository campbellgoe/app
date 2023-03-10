import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import Title from "../../components/Title";
import WelcomeMessage from "../../components/WelcomeMessage";
import styles from './Login.module.scss';

/**
 * @component Login
 * @page renders in /login
 * Displays a login form along with a title and welcome message / instructions
 */
class Login extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <Title>Login page</Title>
        <WelcomeMessage>
          {[
            'Welcome to Lorem Ipsum.',
            'Please enter your username and password below to access your dashboard.'
          ]}
          </WelcomeMessage>
        <LoginForm className={styles.loginForm} />
      </div>
    )
  }
}

export default Login
