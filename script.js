const downloadUsers = (e) => {
  e.preventDefault();

  const usersNumbers = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  console.log(usersNumbers, usersGender);

  const url = "https://randomuser.me/api/?results=10";
  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw Error("response.status !== 200");
      } else {
        return response.json();
      }
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

document.querySelector(".generator").addEventListener("submit", downloadUsers);
