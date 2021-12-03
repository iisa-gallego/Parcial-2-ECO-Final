const firebaseConfig = {
    apiKey: "AIzaSyDi58H6JRHqgueyILWbAtitVOXre8ESAc0",
    authDomain: "parcial-2---eco.firebaseapp.com",
    projectId: "parcial-2---eco",
    storageBucket: "parcial-2---eco.appspot.com",
    messagingSenderId: "798468473140",
    appId: "1:798468473140:web:c3ebb687f23aefc4b66561",
    measurementId: "G-GW2TDC55QM"
  };

  export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }