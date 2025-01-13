// import { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import { EyeIcon } from './Icon';
// import {loadUsers} from './api';

// const Completed_Task = () => {
//     let [usersList, setUsersList] = useState([]);
    
//     useEffect(() => {
//         loadUsers((data) => {
//             let rows = data.map((user) => {
//                 return generateRow(user);
//             });
//             setUsersList(rows);
//         },() => {
//             setUsersList([]);
//         });
//     }, []);

//     function generateRow(user) {
//         return (
//             <tr key = {user.id}>
//                 <th scope="row">{user.id}</th>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>@{user.email}</td>
//                 <td><Link to={`details/${user.id}`}><EyeIcon/> </Link></td>
//             </tr>
//         );
//     }
//   return (
//     <>
//         <div className="container container-fluid">
//             <div className="d-flex">
//                 <h2>Users list</h2>
//             </div>
//             <Link to={'add'}>
//                 <button>+</button>
//             </Link>
//             <br/>
            
//             {
//                 usersList.length === 0 ?

//                 <div className="d-flex justify-content-center">
//                     <div className="spinner-border" role="status">
//                         <span className="visually-hidden">Please wait...</span>
//                     </div>
//                 </div>

//             :
//                 <div className="d-flex">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">View</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {usersList}
//                         </tbody>
//                     </table>
//                 </div>
                
//             }
//         </div>
//       </>
//   )
// }

// export default Completed_Task;


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
console.log("entered");

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

export default Completed_Task;