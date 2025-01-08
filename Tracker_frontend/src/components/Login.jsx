import { Link,useNavigate } from 'react-router';
import logo from '../assets/Tech-Logo.ico'
function Login(){
    let login=()=>{
        alert('Login Success')
    }
    return(
        <>
        <div>    
        <label>Email</label>
        <br/>
        <input name="Email" placeholder="Enter your Email here"></input>
        <br/>
        <br/>
        <label>Password</label>
        <br/>
        <input name="Password" placeholder="Enter Password"></input>
        <br/>
        <br/>
        <button onClick={login}>Login</button>
        </div>
        </>
    )
}
export default Login;