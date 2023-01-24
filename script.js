// JS FÖR FIREBASE:

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; // <--

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    databaseURL: "https://demonologi-7030a-default-rtdb.europe-west1.firebasedatabase.app/", // <--
    apiKey: "AIzaSyDQLA01l4UU8-POV29LcDYf_MmKAknuU1k",
    authDomain: "demonologi-7030a.firebaseapp.com",
    projectId: "demonologi-7030a",
    storageBucket: "demonologi-7030a.appspot.com",
    messagingSenderId: "791597752526",
    appId: "1:791597752526:web:f4b8769a52b3fe5ef2309f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // <---
console.log(db);


function writeUserData() {
    set(ref(db, 'Leon'), {
        message: "World"
    });
}
writeUserData()


onValue(ref(db, 'Leon'), (snapshot) => {
    const data = snapshot.val();
    alert(data.message)
    document.body.innerHTML = data.message;
}, { onlyOnce: true }
);


onValue(ref(db, '/'), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey, childData);
    })
}, { onlyOnce: true }
);


remove(ref(db, 'Leon') ).then( () => {
    console.log("Leon");
})