
var firebaseConfig = {
    apiKey: "AIzaSyCmK_J5yOy2ZPHbeCzOzczziTNiy-2-Eos",
    authDomain: "newagent-f9mv.firebaseapp.com",
    projectId: "newagent-f9mv",
    storageBucket: "newagent-f9mv.appspot.com",
    messagingSenderId: "337439444645",
    appId: "1:337439444645:web:f2792cf00140ab7c9c474c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const noLogged = document.getElementById('noLogged')
const loggedIn = document.getElementById('loggedIn')
const singInButton = document.getElementById('singInButton')
const singOutButton = document.getElementById('singOutButton')
const userDetails = document.getElementById('userDetails')

const provider = new firebase.auth.GoogleAuthProvider()

singInButton.onclick = () => auth.signInWithPopup(provider)
    

singOutButton.onclick = () => {
    try {
        auth.singOut()
    } catch (error) {
        console.log(error)
    }

}