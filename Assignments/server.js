console.log(process.env);

process.env.SERVER_NAME = 'Papagei 5000';
process.env.SERVER_CPU = 'Archimedes MMX';
process.env.SERVER_URL = 'http://localhost:5000/';
process.env.SERVER_LOG = 'LOG.txt';

console.log('Server Name:', process.env.SERVER_NAME)
console.log('Server CPU:', process.env.SERVER_CPU)
console.log('Server URL:', process.env.SERVER_URL)
console.log('Server Log:', process.env.SERVER_LOG)

