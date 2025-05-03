import crypto from 'crypto';

console.log('Starting the key generation');

crypto.pbkdf2('password','salt', 50000, 10,'sha256',(err, key)=>{
    if(err){
        console.error('Error while generating the key',err);
    }else{
        console.log('Key generated successfully');
        console.log('And the key is ', key);
    }
})