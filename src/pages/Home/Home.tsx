import React from "react";
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            {/* <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Home
