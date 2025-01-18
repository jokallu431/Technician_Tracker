function loadUsers(resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://fakerapi.it/api/v2/users?_quantity=10&_gender=male", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

function loadTask(resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("http://localhost:4000/task/task_get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((e) => {
        console.log(e);
        reject(null);
      });
}

function loadTaskDetails(id, resolve, reject) {
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://fakerapi.it/api/v2/users?_quantity=1&_gender=male", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result.data);
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
      resolve(result.data);
    })
    .catch(() => {
      reject(null);
    });
}

function verifyUser(token, resolve, reject) {
 

  console.log(`Bearer ${token}`);
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
export { loadUsers, loadTaskDetails,verifyUser, loadTask,loadUserList,loadUsersDetails };