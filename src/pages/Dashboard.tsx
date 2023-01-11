import React from "react";
import Title from "../components/Title";
import styles from './BarChart.module.scss'
type RangeIndexSelectorProps = {
  maxItems: number;
  selectedIndex: number;
  setSelectedIndex: (newIndex: number) => void
}

class RangeIndexSelector extends React.Component<RangeIndexSelectorProps> {
  render(){
    const { maxItems, setSelectedIndex, selectedIndex } = this.props
    return (
      <input
        type="range"
        min={0}
        max={maxItems - 1}
        step={1}
        value={selectedIndex}
        onChange={e => setSelectedIndex(parseInt(e.target.value))}
      />
    )
  }
}

type AttributesDataType = {
  name: string;
  value: number;
  unit: string;
}

type TablePropsType = {
  headings: string[],
  data: AttributesDataType[]
}

class Table extends React.Component<TablePropsType> {
  render(){
    const { headings, data } = this.props
    return (
      <table>
        <thead>
          <tr>
            {headings.map((heading: string) => (
              <th
                key={heading}
                className="table-heading"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map(({name, value, unit}) => {
              return (
                <tr key={name}>
                  <td className="table-cell">{name}</td>
                  <td className="table-cell">{value+unit}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

type SimpleBarChartPropsType = {
  data: AttributesDataType[]
}

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

type DataType = {
  title: string
  attributes: AttributesDataType[]
}

type DashboardStateType = {
  loaded: boolean;
  data: DataType[];
  selectedIndex: number
}
class Dashboard extends React.Component<{}, DashboardStateType> {

  state = {
    loaded: false,
    data: [],
    selectedIndex: 0
  }

  componentDidMount() {
    const fetchAndSetData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      this.setState({ data, loaded: true, selectedIndex: 0 })
    }
    fetchAndSetData()
  }
  render(){
    if(!this.state.loaded) {
      return (
        <div>Loading...</div>
      )
    }
    const { data, selectedIndex } = this.state
    const item = data[selectedIndex] as DataType
    const { title, attributes } = item
    return (
      <div>
        <Title>{title}</Title>
        <Table
          headings={['Name', 'Value']}
          data={attributes}
        />
        <SimpleBarChart data={attributes} />
        <RangeIndexSelector
        maxItems={data.length}
        setSelectedIndex={(newIndex: number) => {
          this.setState(state => ({
            ...state,
            selectedIndex: newIndex
          }))
        }}
        selectedIndex={selectedIndex}
        />
      </div>
    )
  }
}

export default Dashboard
