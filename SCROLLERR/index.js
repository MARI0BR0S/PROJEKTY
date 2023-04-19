// HANDLER DomCONTENTLOADED  --> zostanie wywołany gdy cały DOM zostanie załadowany
document.addEventListener('DOMContentLoaded', () => {
  const scroller = new Scroller('#root');
  document.addEventListener('wheel', (e) => scroller.listenScroll(e))
  
  // w którą stronę był swipe
  // listener na start dotyku i na move --> ruch
document.addEventListener('swipeUp',()=>scroller.scroll(1))
  document.addEventListener('swipeDown', () => scroller.scroll(-1))
  document.addEventListener('keydown', (event) => {
   switch (event.key) {
    case 'ArrowDown':
      return scroller.scroll(1)     
   
     case 'ArrowUp':
    return scroller.scroll(-1)     
     default: return;
   }
    
  })
  
})