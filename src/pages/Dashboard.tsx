import React from "react";
import Title from "../components/Title";

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
type DashboardStateType = {
  loaded: boolean;
  data: {
    title: string
    attributes: {
      name: string;
      value: number;
      unit: string;
    }[]
  }[];
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
    const item = data[selectedIndex]
    const { title, attributes } = item
    return (
      <div>
        <Title>{title}</Title>
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
