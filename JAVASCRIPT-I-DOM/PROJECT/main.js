const addElement = (e, node, txt, attribute, value) => {

  e.preventDefault();
  const element = document.createElement(node);
 
  if (txt) {
    const text = document.createTextNode(txt); // węzeł tekstu
    element.appendChild(text); //dodanie tekstu do naszego elementu}
  }
  if(attribute) element.setAttribute(attribute, value)
 
 
  document.querySelector('.content').appendChild(element)
}


const searchElements = (event,namedElement) => {
  event.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = "";
  const elements = [...document.querySelectorAll(namedElement)];
  // console.log(elements,infoElement);

  if (elements.length) {
    infoElement.innerHTML = `<p class="result__info"> W tym dokumencie znalazłem ${elements.length} elementów ${namedElement}</p>`;
    showInfo(elements,infoElement)
  } else {
    infoElement.innerHTML = `<p class="result__info"> W tym dokumencie nie  znalazłem elementów ${namedElement}</p>`
    return;
  }
  
}

const showInfo = (elements, infoElement) => {
  // console.log(elements,infoElement);
  
  elements.forEach(element => {
    const item = document.createElement('div');
    item.className = 'result__element-info';
    item.innerHTML = `
    <div> ${element.nodeName}</div>
    <div>Klasa/klasy : ${element.className}</div>
    <div> Wysokość elementu(offsetHeight) : ${element.offsetHeight}</div>
    <div> Szerokość elementu(offsetWidth) : ${element.offsetWidth}</div>
    <div>Odległość od lewej krawędzi (offsetLeft) : ${element.offsetLeft}</div>
    <div>Odległość od górnej krawędzi (offsetTop) : ${element.offsetTop}</div>
    <div>Liczba elementów dzieci(childElementCount) : ${element.childElementCount}</div>
    `
    infoElement.appendChild(item);
    console.log(item.textContent);
    
  })
}

// listenery


const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search')



addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.text.value,
  addForm.elements.attr.value,
  addForm.elements.value.value
));// funkcja anonimowa która będzie coś przekazywać



searchForm.addEventListener('submit', (e) =>searchElements(e, searchForm.elements['searching-element'].value)
)
