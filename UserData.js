import bcrypt from "bcryptjs";
const userdata = {
  users: [
    {
      name: "Prashanth",
      email: "prashanthyarram@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isadmin: true,
    },
    {
      name: "ramesh",
      email: "ramesh@gmail.com",
      password: bcrypt.hashSync("5678", 8),
      isadmin: false,
    },
    {
      name: "jhon",
      email: "jnonny@gmail.com",
      password: bcrypt.hashSync("91011", 8),
      isadmin: false,
    },
    {
      name: "cristine",
      email: "cristene@gmail.com",
      password: bcrypt.hashSync("1213", 8),
      isadmin: false,
    },
  ],
};
export default userdata;
