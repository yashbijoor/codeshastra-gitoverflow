import React, {useState} from 'react';
import '../css/RegistrationForm.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
            <h1>Enter Information</h1>
              <div className="M_Income">
                  <label className="form__label" for="M_Income">Monthly Income</label>
                  <input className="form__input" type="text" id="M_Income" placeholder="Enter Your Monthly Income"/>
              </div>
                
              <div className="C1">
                  <label className="form__label" for="C1">Travelling</label>
                  <input className="form__input" id="C1" placeholder="Enter Amount"/>
              </div>
              <div className="C2">
                  <label className="form__label" for="C2">Food</label>
                  <input className="form__input" id="C2" placeholder="Enter Amount"/>
              </div>
              <div className="C3">
                  <label className="form__label" for="C3">House</label>
                  <input className="form__input" id="C3" placeholder="Enter Amount"/>
              </div>
              <div className="C4">
                  <label className="form__label" for="C4">Additional</label>
                  <input className="form__input" id="C4" placeholder="Enter Amount"/>
              </div>

          </div>
          <div class="footer">
              <button type="submit" class="btn">ENTER</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;
