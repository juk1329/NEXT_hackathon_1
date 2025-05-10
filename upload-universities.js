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

const universities = [
    { name: "중앙대학교", location: "서울" },
    { name: "서강대학교", location: "서울" },
    { name: "한국체육대학교", location: "서울" },
    { name: "한국항공대학교", location: "서울" },
    { name: "한신대학교", location: "경기" },
    { name: "경북대학교", location: "대구" },
    { name: "경희대학교(서울)", location: "서울" },
    { name: "경희대학교(국제)", location: "수원" },
    { name: "고려대학교", location: "서울" },
    { name: "연세대학교", location: "서울" },
    { name: "제주대학교", location: "제주" },
    { name: "한림대학교", location: "강원" },
    { name: "건국대학교", location: "서울" },
    { name: "협성대학교", location: "경기" },
    { name: "가톨릭대학교", location: "경기" },
    { name: "광운대학교", location: "서울" },
    { name: "한남대학교", location: "대전" },
    { name: "한양대학교(ERICA)", location: "안산" },
    { name: "동국대학교", location: "서울" },
    { name: "조선대학교", location: "광주" },
    { name: "아주대학교", location: "경기" },
    { name: "서울시립대학교", location: "서울" },
    { name: "이화여자대학교", location: "서울" },
    { name: "인천대학교", location: "인천" },
    { name: "전북대학교", location: "전북" },
    { name: "서울대학교", location: "서울" },
];

async function uploadUniversities() {
    const colRef = collection(db, "universities");
    for (const uni of universities) {
        await addDoc(colRef, uni);
        console.log(`✅ ${uni.name} 업로드 완료`);
    }
    console.log("🎉 모든 대학교 업로드 완료!");
    process.exit();
}

uploadUniversities();
