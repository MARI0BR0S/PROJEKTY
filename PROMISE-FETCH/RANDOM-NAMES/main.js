
const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = ''
  users.forEach(user => {
    const item = document.createElement('div')
    item.className = 'user'
    item.innerHTML = `
    <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}  </div>
    <img class="user__image" src="${user.picture.medium} ">
    `
    console.log(user)
    resultArea.appendChild(item)
  }
  )
  
}
const getUsers = (e) => {
  e.preventDefault()


  const usersNumber = document.querySelector(`[name="users-number"]`).value;
  const usersGender =  document.querySelector(`[name="gender"]`).value;




  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`
  // metoda FETCH  tworzy Promise(Obietnicę)
  // OBIETNICE mają stan oczekujący do czasu kiedy zostaną rozstrzygnięte
  fetch(url) // POWSTAJE OBIETNICA - OCZEKUJĄCY
  // OBIETNICA - ROZSTRZYGNIĘTA(SPEŁNIONE | ODRZUCONE)
    //WYKONUJE SIĘ THEN --> POZYTYWNIE
    .then(response => {
      console.log(url)
      if (response.status !== 200) {
        throw new Error("To nie jest odpowiedź 200")
      }
       else return response.json()
      // .json() wyodrębni z odpowiedzi (obiektu response ) json-a i sparsuje go do obiektu JavaScript
    }
  ) // metoda dla rozstrzygnięcia promisa pozytywnie
    // co ciekawe , np. 404 jest pozytywnym rozstrzygnięciem promisa , ale nie ma żadnych zasobów do pobrania pod tym adresem 

    // to co zostało zwrócone z response.json() przechodzi 
    .then(json =>showUsers(json.results) //obiekt stworzony w oparciu o otrzymane dane w JSON-ie
  )
    
    // WYKONUJE GDY ROZSTRZYGNIĘCIE - ODRZUCONE
    .catch(err=>console.log(err,'błąd')
    ) 
  
}

document.querySelector('.generator').addEventListener('submit',getUsers)