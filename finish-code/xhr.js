const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject("Ada kesalahan");
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Ada kesalahan dari xhr.onerror");
    };

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then(resData => console.log(resData));
};
const postData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
