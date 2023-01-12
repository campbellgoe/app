import React from "react"
import type { AttributesDataType } from "../../pages/Dashboard/Dashboard"
import styles from './BarChart.module.scss'

type SimpleBarChartPropsType = {
  data: AttributesDataType[]
}
/**
 * @component BarChart
 * Renders a simple bar chart
 * Bar height is determined by dividing the value by the largest number in the data set
 */
class SimpleBarChart extends React.Component<SimpleBarChartPropsType> {
  render(){
    const data = this.props.data
    const largestValue = data.reduce((largest, { value }) => value > largest ? value : largest, 0)
    return (
      <div className={styles.container}>
        {data.map(({ name, value }) => {
          return (
            <>
            <div
              className={styles.bar}
              style={{
                height: value / largestValue * 100 + '%'
              }}
            />
            <label className={styles.barLabel}>
              {name}
            </label>
            </>
          )
        })}
      </div>
    )
  }
}

export default SimpleBarChart
