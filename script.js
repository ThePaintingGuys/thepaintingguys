document.onkeypress = function(e) {
  e = e || window.event
  if (e.key === 'g') {
    window.location.href += '/generator'
  }
}