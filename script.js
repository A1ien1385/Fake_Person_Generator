const downloadUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;

  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,female" : usersGender
  }`;
  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw Error("response.status !== 200");
      } else {
        return response.json();
      }
    })
    .then((json) => showUsers(json.results))
    .catch((err) => console.log(err));
};

const showUsers = (users) => {
  const resultArea = document.querySelector(".user-list");
  users.forEach((user) => {
    const item = document.createElement("div");
    item.className = "user";
    item.innerHTML = `
    <div class="user_name">${user.name.title.toUpperCase()} 
    ${user.name.first.toUpperCase()}
    ${user.name.last.toUpperCase()}
    </div>
    <img class=""user__image src=>
    `;
  });
};
document.querySelector(".generator").addEventListener("submit", downloadUsers);
