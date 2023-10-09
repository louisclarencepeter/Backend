import bcrypt from 'bcrypt';

const password = '1234Segura!';

const hash = await bcrypt.hash(password, 12);

console.log(hash);

const providePassword = '1234Segura!';

const isMatch = await bcrypt.compare(providePassword, hash);

console.log(isMatch);