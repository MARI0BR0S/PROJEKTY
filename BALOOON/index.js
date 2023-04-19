document.addEventListener('DOMContentLoaded', function () {
  const animgBg = new AnimBg('.anim-bg')
  document.addEventListener('mousemove',(e)=>animgBg.listenCursorMove(e))
})