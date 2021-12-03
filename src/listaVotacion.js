//llamar lo que está en la clase libro y poner los libros en una lista

import { initializeApp } from '/src/firebaseConfig';
import{getDatabase, ref, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebaseConfig";
import{libro} from "./libro";

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//Instancias de los objetos
const container = document.getElementById("bookContainer");

function getLibro(){   
    const db = getDatabase();
    const dbRef = ref(db, 'libros');

    //Leer (algo parecido a un observer)
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        libros(data);
        console.log(data);
        
    });
}

function libros(data){
    if(data){
        container.innerHTML = "";
        Object.keys(data).forEach((k, index) => {
            //Crea objeto de la clase libro
            const card = new libro(data[k]);

            container.appendChild(card.render());
        });
    }
}

getLibro();