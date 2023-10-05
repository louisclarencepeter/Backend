import bcrypt from "bcrypt";

const plainTextPassword = "Test1234$_*";

console.time(`RESPONSE TIME`);

const isChecked = bcrypt.compareSync(
  plainTextPassword,
  "$2b$20$IfCRlGMiH4PiuyxU99JiwuX4iT0OGFRVEJtTLMUMPuJIvv6xT8FmS"
);

console.timeEnd(`RESPONSE TIME`);

console.log("the password is cortrect", isChecked);
