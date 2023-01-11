import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

type StateType = { username: string; password: string; }

const Navigate = ({ to }: { to: string }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return <div>Loading</div>
}

class LoginForm extends React.Component<{}, StateType> {

  state = {
    username: '',
    password: '',
    submitted: false
  }
  isSubmitEnabled(username: StateType["username"], password: StateType["password"]): boolean {
    return !!(username.length && password.length)
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // this will stop the form from submitting so the page doesn't refresh
    // TODO: therefore it needs to be submitted some other way e.g. use FormData with fetch
    e.preventDefault()
    // next go to the dashboard page
    this.setState(state => ({...state, submitted: true }))
  }

  render(){
    const { username, password, submitted } = this.state
    console.log('submitted', submitted)
    if(submitted){
      return <Navigate to="/dashboard"/>
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => {
            this.setState(state => ({...state, username: e.target.value }))
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            this.setState(state => ({...state, password: e.target.value }))
          }}
        />
        <input
        type="submit"
        disabled={!this.isSubmitEnabled(username, password)}
        value="Submit"
        />
      </form>
    )
  }
}

export default LoginForm
