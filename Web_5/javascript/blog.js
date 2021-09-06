window.onkeydown = function (event) {
  if (event.shiftKey) {
    switch (event.keyCode) {
      case 87:
        event.preventDefault();
        document.getElementById('topic').focus();
        break;
      case 69:
        event.preventDefault();
        document.getElementById('textarea').focus();
        break;
      case 81:
        event.preventDefault();
        document.getElementById('username').focus();
        break;
      default:
        break;
    }
  }
}