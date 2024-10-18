// เริ่มเขียนโค้ดตรงนี้

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function handleResponse(response) {
  return response.json();
}

function moreThan17(profile) {
  return profile
    .filter((user) => user.name.length > 17)
    .map((user) => console.log(user.name));
}

getUsers().then(handleResponse).then(moreThan17);
