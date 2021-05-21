const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.status >= 400){
      return response.json().then(data => {
        const error = new Error('Ada kesalahan');
        error.data = data;
        throw error
      })
    }
      return response.json();
  });
}

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(resData => {
    console.log(resData);
  })
};
const postData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }).then(resData => {
    console.log(resData);
  }).catch(err => {
    console.log(err, err.data)
  })
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
