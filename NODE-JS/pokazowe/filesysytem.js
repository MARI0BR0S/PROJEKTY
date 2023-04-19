const fs = require('fs');
// odczytywanie pliku , metoda asynchroniczna
// (ścieżka,kodowanie,callback(błąd,powodzenie)=>{
 // jako pierwsze jest przekazywane błąd , drugim parametrem jest plik , który przetwarzamy 
// })
fs.readFile('./plik.txt','utf8', (err, file) => {
  console.log(err,file);
  
})

// metoda synchroniczna
const text = fs.readFileSync('./plik.txt', 'utf-8')

console.log(text);



