import bcrypt from "bcrypt";

const plainTextPassword = "Test1234$_*";

for ( let saltRounds = 10; saltRounds < 21; saltRounds++) {
    console.time (`RESPONSE TIME| cost:${saltRounds}, time to hash`);

    const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
    
    console.timeEnd (`RESPONSE TIME| cost:${saltRounds}, time to hash`);

    console.log(hash);
    console.log(`\n`);
}