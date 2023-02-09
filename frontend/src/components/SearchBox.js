import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = searchTerm.keyword
    const department = searchTerm.department

    if (searchTerm.department && searchTerm.keyword) {
      navigate(`/department/${department}/search/${keyword}`)
    } else if (searchTerm.department) {
      navigate(`/department/${department}`)
    } else if (searchTerm.keyword) {
      navigate(`/search/${keyword}`)
    } else {
      navigate(`/`)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setSearchTerm((values) => ({ ...values, [name]: value }))
  }

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="keyword"
        onChange={handleChange}
        placeholder="Search Products..."
        className="search"
        preventDefault
      ></Form.Control>
      <Form.Select
        aria-label="Default select example"
        name="department"
        onChange={handleChange}
        className="searchByDepartment"
      >
        <option value="">All Departments</option>
        <option value="Drums">Drums</option>
        <option value="Guitars">Guitars</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button type="submit" variant="secondary" className="searchButton">
        <i className="fa-solid fa-magnifying-glass"></i>{' '}
      </Button>
    </Form>
  )
}

export default SearchBox
