// console.log("gotuję wodę");

// sleep(500)
//   .then(() => {
//     console.log("Woda zagotowana");
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log("Herbata zaparzona");
//     return sleep(1000);
//   })
//   .then(() => {
//     console.log("Herbata ostygła");
//   })

//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
    .then((response) => {
        return response.json(); // metoda która zwraca kolenego Promisa
    })
    .then((booksInfo) => {
        console.log(booksInfo);
    })
    .catch((err) => {
        console.log("błąd!", err);
    });
