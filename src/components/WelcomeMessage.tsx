import React from "react";
import styles from './WelcomeMessage.module.scss'
class WelcomeMessage extends React.Component<{ children: JSX.Element[] | string[] }> {
  render() {
    const children = this.props.children
    return (
      <div className={styles.container}>
        {children.map(paragraph => (
          <p className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>

    )
  }
}

export default WelcomeMessage
