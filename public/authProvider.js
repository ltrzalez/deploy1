const auth = firebase.auth()

const noLogged = document.getElementById('noLogged')
const loggedIn = document.getElementById('loggedIn')
const singInButton = document.getElementById('singInButton')
const singOutButton = document.getElementById('singOutButton')
const userDetails = document.getElementById('userDetails')

const provider = firebase.auth.GoogleAuthprovider()

singInButton.onclick = () => {
    try {
        auth.signInWithPopup(provider)
    } catch (error) {
        console.log(error)
    }
}

singOutButton.onclick = () =>{
    try {
        auth.singOut()
    } catch (error) {
        console.log(error)
    }
    
}