import { initializeApp } from '/src/firebaseConfig';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

// Inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

// Elementos de la página
const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

function login(e, ev){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "listaVotacion.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

login_btn.addEventListener("click", login);

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        // Hay usuario loguegado
        window.location.href = "listaVotacion.html"
    }
});