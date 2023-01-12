import React from "react"
import { AttributesDataType } from "../../pages/Dashboard/Dashboard"

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

export default Table
