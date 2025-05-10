const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

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

// 아티스트 목록 
const artists = [
    "로이킴",
    "키키",
    "아이브",
    "크래비티",
    "장기하",
    "카더가든",
    "박재범",
    "청하",
    "YB",
    "pH-1",
    "빅나티",
    "나상현씨밴드",
    "TIOT",
    "지미브라운",
    "로시",
    "하하&스컬",
    "이영지",
    "인어미닛",
    "이민정",
    "키코",
    "권은비",
    "이프아이",
    "TNX",
];

async function uploadArtists() {
    const colRef = collection(db, "artists");
    for (const name of artists) {
        const docRef = await addDoc(colRef, { name });
        console.log(`✅ ${name} 업로드 완료 → ID: ${docRef.id}`);
    }
    console.log("🎉 모든 아티스트 업로드 완료!");
    process.exit();
}

uploadArtists();
