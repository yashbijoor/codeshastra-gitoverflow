import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Table.css"
function Table(props) {
  return( <div className='table-structure'>
    <table className="table caption-top ">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Expenses</th>
      <th scope="col">Cost</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Housing</td>
      <td>2000</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Traveling</td>
      <td>9000</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Food</td>
      <td>5000</td>
      
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Vacation</td>
      <td>7000</td>
      
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Health</td>
      <td>11000</td>
      
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Additional</td>
      <td>8000</td>
      
    </tr>


  </tbody>
</table>
</div>)
}

Table.propTypes = {}

export default Table