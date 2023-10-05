import bcrypt from "bcrypt";

const hashPassword = async () => {
  const salt = await bcrypt.genSalt(10); //10 is the number of rounds of hashing or cost factor
  console.log("salt is", salt);

  //2 keys generated from the password and the salt

  const hashedValue = await bcrypt.hash("test1234", salt);
  console.log("hashed value is", hashedValue);

  const hashedValue2 = await bcrypt.hash("test1234", salt);
  console.log("hashed value is", hashedValue2);

  // use this, always generate a unique salt for each password
  const hashedValue3 = await bcrypt.hash("test1234", 10);
  console.log("hashed password with unique value is", hashedValue3);
};

// first value = password entered by user
// second value = hashed value in the database

const comparePassword = async (password, hash) => {
  const checkPassword = await bcrypt.compare(password, hash);
  console.log("These are matching", checkPassword);
};

hashPassword();
comparePassword(
  "test1234",
  "$2b$10$v673TccNWmPFyJ26ZGpi0ei93ibJzAj2yVbrck1R2i8aH2Agm5gLm"
);
