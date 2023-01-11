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

type TablePropsType = {
  headings: string[],
  data: [string, string][]
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
            data.map(([name, value]) => {
              return (
                <tr key={name}>
                  <td className="table-cell">{name}</td>
                  <td className="table-cell">{value}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

type DataType = {
  title: string
  attributes: {
    name: string;
    value: number;
    unit: string;
  }[]
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
        <Table headings={['Name', 'Value']} data={
          attributes.map(
            ({ name, value, unit }) => {
              return [name, value+unit]
            })
          }
        />
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
