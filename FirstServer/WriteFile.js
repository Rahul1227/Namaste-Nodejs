import fs from 'fs';

// writing to a file synchronously
try{
    fs.writeFileSync('./WriteFile.txt','This is just the sample text and I am just writing anything')

}catch(err){
    console.error('Error while writing to the file', err);
}


