import React from 'react'
import { number } from 'prop-types'

const Value = ({ value }) => <span className="app-cell-value">{value}</span>

Value.propTypes = { value: number.isRequired }

const PencilGrid = () => (
  <>
    <div className="app-pencil-row">
      <div className="app-pencil-cell"><Value value={1} /></div>
      <div className="app-pencil-cell"><Value value={2} /></div>
      <div className="app-pencil-cell"><Value value={3} /></div>
    </div>
    <div className="app-pencil-row">
      <div className="app-pencil-cell"><Value value={4} /></div>
      <div className="app-pencil-cell"><Value value={5} /></div>
      <div className="app-pencil-cell"><Value value={6} /></div>
    </div>
    <div className="app-pencil-row">
      <div className="app-pencil-cell"><Value value={7} /></div>
      <div className="app-pencil-cell"><Value value={8} /></div>
      <div className="app-pencil-cell"><Value value={9} /></div>
    </div>
  </>
)

const Cell = ({ value }) => {
  const showPencil = false

  return (
    <div className="app-cell">
      {showPencil
        ? <PencilGrid />
        : value && <Value value={value} />}
    </div>
  )
}

Cell.propTypes = { value: number }

Cell.defaultProps = { value: undefined }

export default Cell
