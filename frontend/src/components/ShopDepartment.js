import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function ShopDepartment() {
  const [department, setDepartment] = useState('')
  const navigate = useNavigate()

  const selectHandler = (e) => {
    setDepartment(e)
    navigate(`/department/${department}`)
  }

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Shop Department"
      variant="secondary"
      className="d-flex flex-column"
      onClick={selectHandler}
    >
      <Dropdown.Item eventKey="Drums">Drums</Dropdown.Item>
      <Dropdown.Item eventKey="Guitars">Guitars</Dropdown.Item>
      <Dropdown.Item eventKey="Bass">Bass Guitars</Dropdown.Item>
      <Dropdown.Item eventKey="Keys">Pianos & Keyboards</Dropdown.Item>
      <Dropdown.Item eventKey="Wind">Wind Instruments</Dropdown.Item>
    </DropdownButton>
  )
}

export default ShopDepartment
