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

function loadUserDetails(id, resolve, reject) {
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

function loadVendorDetails(id, resolve, reject) {
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

export { loadUsers, loadUserDetails, loadUserList, loadVendorDetails };