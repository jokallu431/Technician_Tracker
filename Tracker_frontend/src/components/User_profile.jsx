function User_profile(){
    let profile=()=>{
        alert('New User Profile Created')
    }
return(
<>
<div className="task">
Create a new Profile
<br/>
<br/>
<label> Name :</label>
<br/>
<input name="User_Name" type="text" placeholder='Enter Name here'></input>
<br/>
<label> Phone No. :</label>
<br/>
<input name="Phone No." type="tel" placeholder='Enter Phone Number'></input>
<br/>
<label>Email id :</label>
<br/>
<input name="Email" type="text" placeholder='Enter Email Id'></input>
<br/>
<label>Password :</label>
<br/>
<input name="Password" type="password" placeholder='Enter Password'></input>
<br/>
<label>Confirm Password :</label>
<br/>
<input name="Password" type="password" placeholder='Confirm Password'></input>
<br/>
<label>Role :</label>
<br/>
<select>
    <option value='Admin'>Admin</option>
    <option value='Technician'>Technician</option>
</select>
<br/>
<br/>
<button onClick={profile}>Create Profile</button>
</div>
</>
);
};
export default User_profile;