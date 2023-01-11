import React from "react";
import styles from './WelcomeMessage.module.scss'
class WelcomeMessage extends React.Component<{ children: JSX.Element[] | string[] }> {
  render() {
    const children = this.props.children
    return (
      <div className={styles.container}>
        {children.map((paragraph, index) => (
          <p
            // It's not recommended to use index as the key but
            // the order of paragraphs won't change so it's ok
            key={index}
            className={styles.paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>

    )
  }
}

export default WelcomeMessage
