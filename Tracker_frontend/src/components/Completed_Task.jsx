import { useState} from 'react';

const Completed_Task = () => {
const [name, setName] = useState('');
function profile(){
 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
console.log("entered")

fetch("http://localhost:4000/users/profile", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
  return (
    <div>Completed_Task
      <input type="name" placeholder="name" value={name}
        onChange={(e) => setName(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={profile}>Submit</button>
    </div>
  )
}

export default Completed_Task;