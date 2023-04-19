class Swiper{
  constructor() {
    this.initialY = null
    this.initialX = null

  document.addEventListener('touchstart',this.startTouch.bind(this))
    document.addEventListener('touchmove', this.moveTouch.bind(this))
    

    this.events = {
      swipeUp: new Event('swipeUp'),
        swipeDown: new Event('swipeDown'),
      swipeLeft:new Event('swipeLeft'),
        swipeRight:new Event('swipeRight')
      
    }
  }


  //zapisanie informacji gdzie uzytkownik zaczął swipe
  startTouch(e) {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  }
  moveTouch(e) {
    if (!this.initialX || !this.initialY) return;


    // końcowa wartość , na której użytkownik skończył swojego swipe'a
    const currentX = e.touches[0].clientX;
    const currentY =e.touches[0].clientY;


    // różnica

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    // console.log({ diffX, diffY });
    
    if (Math.abs(diffX)>Math.abs(diffY)) {
      // jestesmy w osi X
      if (diffX > 0) {
        // w lewo
        document.dispatchEvent(this.events.swipeLeft)
      } else {
       // w prawo 
       document.dispatchEvent(this.events.swipeRight) 
      }
      
    } else {
      // jestesmy w osi Y
      if (diffY > 0) {
  //  do góry
  document.dispatchEvent(this.events.swipeUp)
      } else {
        // do dołu
        document.dispatchEvent(this.events.swipeDown)
      }
      
    }
    this.initialX = null
    this.initialY = null
  }
}

// ONA NIE BĘDZIE DEFINIOWAĆ TYLKO , ALE RÓWNIEŻ I BYĆ INSTANCJA ODRAZU
new Swiper()