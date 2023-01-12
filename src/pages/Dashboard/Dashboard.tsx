import React from "react";
import SimpleBarChart from "../../components/BarChart/BarChart";
import Table from "../../components/Table/Table";
import Title from "../../components/Title";
import styles from './Dashboard.module.scss'

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

export type AttributesDataType = {
  name: string;
  value: number;
  unit: string;
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
      <div className={styles.container}>
        <Title>{title}</Title>
        <div className={styles.dataColumns}>
          <Table
            headings={['Name', 'Value']}
            data={attributes}
          />
          <SimpleBarChart data={attributes} />
        </div>
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
