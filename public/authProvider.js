const auth = firebase.auth()

const noLogged = document.getElementById('noLogged')
const loggedIn = document.getElementById('loggedIn')
const singInButton = document.getElementById('singInButton')
const singOutButton = document.getElementById('singOutButton')
const userDetails = document.getElementById('userDetails')

const provider = new firebase.auth.GoogleAuthprovider()

singInButton.onclick = () => auth.signInWithPopup(provider)

singOutButton.onclick = () => auth.singOut()