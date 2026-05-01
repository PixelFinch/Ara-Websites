class View {
  static BLANK () {
    return ' '
  }
  static SPACE () {
    return '&nbsp;'
  }
  static TAB () {
    return '&nbsp;&nbsp;&nbsp;&nbsp;'
  }
  static NEWLINE () {
    return '<br>'
  }
  static clr () {
    document.body.style.fontFamily = 'Courier New'
    document.body.innerHTML = ''
  }
  static out (newText) {
    document.getElementById("ride-list").innerHTML = newText;
  }
  static add (newText) {
    document.body.innerHTML += View.NEWLINE() + newText
  }
}
