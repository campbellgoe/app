import React from "react";
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";
import WelcomeMessage from "../components/WelcomeMessage";
import styles from './styles.module.scss';

// Login page
class Login extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <div className="centered">
          <Title>Login page</Title>
          <WelcomeMessage>
            {[
              'Welcome to Lorem Ipsum.',
              'Please enter your username and password below to access your dashboard.'
            ]}
            </WelcomeMessage>
          <LoginForm/>
        </div>
      </div>
    )
  }
}

export default Login
