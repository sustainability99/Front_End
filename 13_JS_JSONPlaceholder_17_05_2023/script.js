const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((users) => {
    const userList = document.getElementById("userList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      userList.append(li);
    });
  })
  .catch((err) => console.log(err));

const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
let users = [];
fetch(url)
  .then((res) => res.json())
  .then((users) => {
    let filteredUsers = users;
    displayUsers(filteredUsers);

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      displayUsers(filteredUsers);
    });
  })
  .catch((error) => {
    console.log("Error fetching user", error);
  });

function displayUsers(users) {
  userList2.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    userList2.append(li);
  });
}
/* searchInput.addEventListener('input', () => {
    //     const searchTerm = searchInput.value.toLowerCase();
    //     filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
    //     displayUsers(filteredUsers);
    // })
    
    // function displayUsers(users) {
    //     userList2.innerHTML = '';
    
    //     users.forEach(user => {
    //         const li = document.createElement('li');
    //         li.innerText = user.name;
    //         userList2.append(li);
    //     })
    // }
    
    "Hello world".includes("llo"); // true, ищет в строке совпадения на подстроку*/
