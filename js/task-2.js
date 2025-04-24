console.log("<<<<<<<<<<<<<<<<TASK 2>>>>>>>>>>>>>>>");
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

const getUsersWithFriend = (allUsers, friendName) => {
  return allUsers.filter((allUser) => {
    return allUser.friends.includes(friendName);
  });
};

console.log(getUsersWithFriend(allUsers, "Briana Decker"));

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));

console.log(getUsersWithFriend(allUsers, "Adrian Cross"));

console.log("");
console.log("");
console.log("");
