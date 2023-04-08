import React,{useState} from 'react' 
import './style1.css';
function Login() { 
	// const [email,setEmail]=useState(""); 
	// const [passw,setPassw]=useState(""); 
	// const[dataInput, setDataInput]=useState(""); 
	// const submitThis=()=>{
	// 	const info={email:email,passw:passw}; 
	// 	setDataInput([info]);
	// }
	// return(
	// <div>
	// 	<div className="wrapper">
	// 	<form className="form" action="" onSubmit={submitThis}> 
	// 		<div className='form-body'> 
	// 			<label htmlFor="email">Email</label>
	// 			<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> 
	// 		</div> 
	// 		<div className='form-body1'> 
	// 			<label htmlFor="passw">Password</label>
	// 		<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
	// 		</div>  
	// 		<button type="submit">Login</button>
	// 	</form>
	// 	</div>
	// </div>

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(email,password);
    }

    return(
        <div>
            <div className="wrapper">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="login" class="btn">Login</button>
            </div>
            </div>
        </div>
       
    )     
}

export default Login   