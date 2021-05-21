const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios.get("https://reqres.in/api/users").then(response => {
    console.log(response.data);
  });
};
const postData = () => {
  axios
    .post("https://reqres.in/api/register", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err, "Ooopss, ada error");
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
