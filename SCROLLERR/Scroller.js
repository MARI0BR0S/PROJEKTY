class Scroller{
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll('section')]
 
    const currentSectionIndex = this.sections.findIndex((element) => this.isScrolledIntoView(element))

    this.currentSectionIndex = Math.max(currentSectionIndex, 0)
    this.isThrottled = false; // czy nasza funkcja jest wstrzymana

    this.drawNavigation()
    this.selectActiveElement()
  }


  isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect()
    const elementTop =Math.floor(rect.top)
    const elementBottom = Math.floor(rect.bottom)
    // console.log(elementTop,elementBottom);
    


    const isVisible = (elementTop>=0) && (elementBottom <= window.innerHeight)

    return isVisible;
    
  }



  listenScroll(e){
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => this.isThrottled = false, 800)
    const direction = e.deltaY < 0 ? -1 : 1; // w górę to ujemna w przeciwnym wypadku dodatnia
    
   this.scroll(direction)

  }
  scroll(direction) {
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    }
    else if (direction === -1) {
        const firstSection = this.currentSectionIndex === 0; 
        if (firstSection) return;
      }
   
    this.currentSectionIndex += direction;
    this.scrollToCurrentSection()
    this.selectActiveElement()
  }

  scrollToCurrentSection() {
    // scrollIntoView -->
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    })
  }
  drawNavigation (){
    this.navContainer = document.createElement('aside');
    this.navContainer.setAttribute('class', 'scroller__navigation')
    const list = document.createElement('ul')

    this.sections.forEach((section,index)=> {
      const listItem = document.createElement('li')
      list.appendChild(listItem)
      listItem.addEventListener('click', () => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection();
        this.selectActiveElement()
      })
    })

    this.navContainer.appendChild(list)

    document.body.appendChild(this.navContainer)
  }

  selectActiveElement () {
    if (this.navContainer) {
      const navItems = this.navContainer.querySelectorAll('li');

      navItems.forEach((item, index) => {
        if (index === this.currentSectionIndex) item.classList.add('active');
        else item.classList.remove('active');
      })
    }
    }
   

}