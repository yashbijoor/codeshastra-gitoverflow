import React, {useState,setState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Loan() {
    const [amount, setAmount] = useState(null);
    const [emi,setEMI] = useState(null);
    const [tenure, setTenure] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "amount"){
            setAmount(value);
        }
        if(id === "emi"){
            setEMI(value);
        }
        if(id === "tenure"){
            setTenure(value);
        }
    }

    const handleSubmit  = () => {
        console.log(amount, emi, tenure);
    }

    return(
        <div>
            <div className="wrapper">
            <div className="form-body">
                <div className="amount">
                    <label className="form__label" for="amount">Loan Amount</label>
                    <input  type="Number" id="email" className="form__input" value={amount} onChange = {(e) => handleInputChange(e)} placeholder="Enter Loan Amount"/>
                </div>
                <div className="emi">
                    <label className="form__label" for="emi">EMI </label>
                    <input className="form__input" type="Number" id="emi" value={emi} onChange = {(e) => handleInputChange(e)} placeholder="Enter EMI"/>
                </div>
                <div className="tenure">
                    <label className="form__label" for="tenure">Tenure of loan </label>
                    <input className="form__input" type="Number" id="tenure" value={tenure} onChange = {(e) => handleInputChange(e)} placeholder="Enter Tenure of Loan"/>
                </div>
            </div>
            <div class="footer">
                <button style={{border: "1px solid #fff"}} onClick={()=>handleSubmit()} type="submit" class="btn">Next</button>
            </div>
            </div>
        </div>
       
    )       
}

export default Loan;