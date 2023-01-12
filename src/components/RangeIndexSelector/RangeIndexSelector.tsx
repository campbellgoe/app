import React from "react";

type RangeIndexSelectorProps = {
  maxItems: number;
  selectedIndex: number;
  setSelectedIndex: (newIndex: number) => void
}

/**
 * @component RangeIndexSelector
 * Renders a range input for selecting items in an array by index
 */
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

export default RangeIndexSelector
