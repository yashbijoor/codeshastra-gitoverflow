import React from 'react'

export default function Select() {
  return (
    <div><select class="form-select " aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="Housing">Housing</option>
    <option value="Travelling">Travelling</option>
    <option value="Food">Food</option>
    <option value="Vacation">Vacation</option>
    <option value="Health">Health</option>
    <option value="Addition">Addition</option>
  </select>
  
  <select class="form-select " aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="Novermber">Novermber</option>
    <option value="December">December</option>
  </select>

  <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">
    @
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="addon-wrapping"
  />
</div>

  </div>
  )
}
