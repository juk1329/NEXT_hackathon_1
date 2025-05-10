const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDGF-tfmPM7KidLrB74ss-EC5T7aBAmCKw",
    authDomain: "uni-festivals.firebaseapp.com",
    projectId: "uni-festivals",
    storageBucket: "uni-festivals.firebasestorage.app",
    messagingSenderId: "1:527143540131:web:d4dc9789a9f62c1cd2f616",
    appId: "G-W0PRGE3SEE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUniversityIDs() {
    const colRef = collection(db, "artists");
    const snapshot = await getDocs(colRef);

    console.log("🔥 artist name → id 매핑 결과:");
    snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(`"${data.name}": "${doc.id}",`);
    });

    process.exit();
}

getUniversityIDs();
