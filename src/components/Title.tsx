import React from "react";

class Title extends React.Component<{ children: JSX.Element | string }> {
  render(){
    return (
      <h1>{this.props.children}</h1>
    )
  }
}

export default Title
