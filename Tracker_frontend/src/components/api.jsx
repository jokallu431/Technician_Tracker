
function loadTask(resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
     
    fetch("http://localhost:4000/task/tasks_get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((e) => {
        console.log(e);
        reject(null);
      });
}

function loadTaskDetails(_id, resolve, reject) {
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch(`http://localhost:4000/task/tasks_get?_id=${_id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function loadUserList(resolve, reject) {
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://localhost:4000/users/userlist", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function loadUsersDetails(_id, resolve, reject) {
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://localhost:4000/users/edit/`${_id}`", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function verifyUser(token, resolve, reject) {
  const myHeaders = new Headers();
  
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("http://localhost:4000/users/verify", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch(() => {
        reject(null);
      });

  }
export { loadTaskDetails,verifyUser, loadTask,loadUserList,loadUsersDetails };