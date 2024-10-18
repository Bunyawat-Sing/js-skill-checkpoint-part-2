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

// หรือใช้เป็น Async / Await ด้วยตัวอย่างด้านล่าง
/*
async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()
  return data; 
};

async function moreThan17(profile) {
  return profile
    .filter((user) => user.name.length > 17)
    .map((user) => user.name);
}

async function getUserData() {
  const userData = await getUsers();
  console.log(userData)
  const filteredUser = await moreThan17(userData);
  console.log(filteredUser)
}

getUserData();
 */
