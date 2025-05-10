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

// ✅ 실제 생성된 더미 30개 문서 데이터
const festivals = [
    {
        university_id: "KL5PLZDab0wQitLCK5d1",
        university_name: "한국항공대학교",
        date: "2025-05-13",
        artist_ids: ["5pv65JZ0NpTwSjIb81aZ", "FebgDfl9I7FaAYnQLUpT"],
        artist_names: ["장기하", "권은비"],
    },
    {
        university_id: "KL5PLZDab0wQitLCK5d1",
        university_name: "한국항공대학교",
        date: "2025-05-14",
        artist_ids: ["8AgwHYrm3SelDX0D7eVr", "5pv65JZ0NpTwSjIb81aZ"],
        artist_names: ["빅나티", "장기하"],
    },
    {
        university_id: "KL5PLZDab0wQitLCK5d1",
        university_name: "한국항공대학교",
        date: "2025-05-15",
        artist_ids: [
            "FhiChopuLDi7eumNpvpj",
            "OzhWDDUCyn4fS7gk67NS",
            "XQ5TRL7BMAJZ9P3MtzFA",
        ],
        artist_names: ["이프아이", "로이킴", "키코"],
    },
    {
        university_id: "v93HUfyGIlNcT4TsgbTg",
        university_name: "연세대학교",
        date: "2025-05-16",
        artist_ids: ["FtfQZKSFVqmYmroFqBRZ", "l8UC72E5tXdg3HFGj39W"],
        artist_names: ["YB", "pH-1"],
    },
    {
        university_id: "v93HUfyGIlNcT4TsgbTg",
        university_name: "연세대학교",
        date: "2025-05-17",
        artist_ids: [
            "mkeTJeqTvIsmlH2gWEV3",
            "IaBqRvOqMsj1m7XJP2Sl",
            "l8UC72E5tXdg3HFGj39W",
        ],
        artist_names: ["카더가든", "이민정", "pH-1"],
    },
    {
        university_id: "v93HUfyGIlNcT4TsgbTg",
        university_name: "연세대학교",
        date: "2025-05-18",
        artist_ids: [
            "8AgwHYrm3SelDX0D7eVr",
            "TXm60UwgTa7f5vU7zPqF",
            "W6NyyG7SXsyp823RhBzr",
        ],
        artist_names: ["빅나티", "로시", "TIOT"],
    },
    {
        university_id: "5BPmlmUElEsrI0yxhlai",
        university_name: "고려대학교",
        date: "2025-05-19",
        artist_ids: [
            "3Hy84xkmPalztUonYCHd",
            "HQwlqYtqdPCYwINCXtKj",
            "BUOKEWb35utt6MS6dX3s",
        ],
        artist_names: ["이영지", "TNX", "지미브라운"],
    },
    {
        university_id: "5BPmlmUElEsrI0yxhlai",
        university_name: "고려대학교",
        date: "2025-05-20",
        artist_ids: [
            "OzhWDDUCyn4fS7gk67NS",
            "BUOKEWb35utt6MS6dX3s",
            "ow4bJRBtyxmONhZfylwo",
        ],
        artist_names: ["로이킴", "지미브라운", "인어미닛"],
    },
    {
        university_id: "5BPmlmUElEsrI0yxhlai",
        university_name: "고려대학교",
        date: "2025-05-21",
        artist_ids: ["BUOKEWb35utt6MS6dX3s", "JsWiWREzsLxs86XmMF3v"],
        artist_names: ["지미브라운", "아이브"],
    },
    {
        university_id: "yZEJrBUbDruh0VnZEj6G",
        university_name: "서울대학교",
        date: "2025-05-22",
        artist_ids: ["3Hy84xkmPalztUonYCHd", "mkeTJeqTvIsmlH2gWEV3"],
        artist_names: ["이영지", "카더가든"],
    },
    {
        university_id: "yZEJrBUbDruh0VnZEj6G",
        university_name: "서울대학교",
        date: "2025-05-23",
        artist_ids: ["BUOKEWb35utt6MS6dX3s", "8AgwHYrm3SelDX0D7eVr"],
        artist_names: ["지미브라운", "빅나티"],
    },
    {
        university_id: "yZEJrBUbDruh0VnZEj6G",
        university_name: "서울대학교",
        date: "2025-05-24",
        artist_ids: [
            "FhiChopuLDi7eumNpvpj",
            "3Hy84xkmPalztUonYCHd",
            "FtfQZKSFVqmYmroFqBRZ",
        ],
        artist_names: ["이프아이", "이영지", "YB"],
    },
    {
        university_id: "sbQ20siPUHKBktB5WBGS",
        university_name: "서강대학교",
        date: "2025-05-25",
        artist_ids: [
            "FhiChopuLDi7eumNpvpj",
            "IaBqRvOqMsj1m7XJP2Sl",
            "FebgDfl9I7FaAYnQLUpT",
        ],
        artist_names: ["이프아이", "이민정", "권은비"],
    },
    {
        university_id: "sbQ20siPUHKBktB5WBGS",
        university_name: "서강대학교",
        date: "2025-05-26",
        artist_ids: [
            "8AgwHYrm3SelDX0D7eVr",
            "QDzx7hfALARdp0rydbMe",
            "ow4bJRBtyxmONhZfylwo",
        ],
        artist_names: ["빅나티", "박재범", "인어미닛"],
    },
    {
        university_id: "sbQ20siPUHKBktB5WBGS",
        university_name: "서강대학교",
        date: "2025-05-27",
        artist_ids: ["sRPuR5oF3ShFLsJ3BMJH", "5pv65JZ0NpTwSjIb81aZ"],
        artist_names: ["나상현씨밴드", "장기하"],
    },
    {
        university_id: "wrNyHiccdg0T5G8SAscG",
        university_name: "경희대학교(서울)",
        date: "2025-05-28",
        artist_ids: [
            "FtfQZKSFVqmYmroFqBRZ",
            "FebgDfl9I7FaAYnQLUpT",
            "sRPuR5oF3ShFLsJ3BMJH",
        ],
        artist_names: ["YB", "권은비", "나상현씨밴드"],
    },
    {
        university_id: "wrNyHiccdg0T5G8SAscG",
        university_name: "경희대학교(서울)",
        date: "2025-05-29",
        artist_ids: ["IaBqRvOqMsj1m7XJP2Sl", "c8UTBQtnis5vX0iwAqze"],
        artist_names: ["이민정", "크래비티"],
    },
    {
        university_id: "wrNyHiccdg0T5G8SAscG",
        university_name: "경희대학교(서울)",
        date: "2025-05-30",
        artist_ids: ["XQ5TRL7BMAJZ9P3MtzFA", "l8UC72E5tXdg3HFGj39W"],
        artist_names: ["키코", "pH-1"],
    },
    {
        university_id: "B8HyzEryQ3PPcQ6bLjPe",
        university_name: "이화여자대학교",
        date: "2025-05-31",
        artist_ids: [
            "FtfQZKSFVqmYmroFqBRZ",
            "FhiChopuLDi7eumNpvpj",
            "W6NyyG7SXsyp823RhBzr",
        ],
        artist_names: ["YB", "이프아이", "TIOT"],
    },
    {
        university_id: "B8HyzEryQ3PPcQ6bLjPe",
        university_name: "이화여자대학교",
        date: "2025-06-01",
        artist_ids: [
            "W6NyyG7SXsyp823RhBzr",
            "JsWiWREzsLxs86XmMF3v",
            "l8UC72E5tXdg3HFGj39W",
        ],
        artist_names: ["TIOT", "아이브", "pH-1"],
    },
    {
        university_id: "B8HyzEryQ3PPcQ6bLjPe",
        university_name: "이화여자대학교",
        date: "2025-06-02",
        artist_ids: ["c8UTBQtnis5vX0iwAqze", "3AYq8OKAXBX9CxSSNUfi"],
        artist_names: ["크래비티", "청하"],
    },
    {
        university_id: "gfFUayTnphYKrfY8Mfj1",
        university_name: "중앙대학교",
        date: "2025-06-03",
        artist_ids: [
            "FtfQZKSFVqmYmroFqBRZ",
            "QDzx7hfALARdp0rydbMe",
            "HQwlqYtqdPCYwINCXtKj",
        ],
        artist_names: ["YB", "박재범", "TNX"],
    },
    {
        university_id: "gfFUayTnphYKrfY8Mfj1",
        university_name: "중앙대학교",
        date: "2025-06-04",
        artist_ids: [
            "9SPAIih1KnLoLLgnrd1B",
            "mkeTJeqTvIsmlH2gWEV3",
            "l8UC72E5tXdg3HFGj39W",
        ],
        artist_names: ["하하&스컬", "카더가든", "pH-1"],
    },
    {
        university_id: "gfFUayTnphYKrfY8Mfj1",
        university_name: "중앙대학교",
        date: "2025-06-05",
        artist_ids: [
            "FebgDfl9I7FaAYnQLUpT",
            "XQ5TRL7BMAJZ9P3MtzFA",
            "9SPAIih1KnLoLLgnrd1B",
        ],
        artist_names: ["권은비", "키코", "하하&스컬"],
    },
    {
        university_id: "NiAjgfLDdQyBjk5IHLEU",
        university_name: "인천대학교",
        date: "2025-06-06",
        artist_ids: [
            "sRPuR5oF3ShFLsJ3BMJH",
            "OzhWDDUCyn4fS7gk67NS",
            "3Hy84xkmPalztUonYCHd",
        ],
        artist_names: ["나상현씨밴드", "로이킴", "이영지"],
    },
    {
        university_id: "NiAjgfLDdQyBjk5IHLEU",
        university_name: "인천대학교",
        date: "2025-06-07",
        artist_ids: [
            "OzhWDDUCyn4fS7gk67NS",
            "XQ5TRL7BMAJZ9P3MtzFA",
            "TXm60UwgTa7f5vU7zPqF",
        ],
        artist_names: ["로이킴", "키코", "로시"],
    },
    {
        university_id: "NiAjgfLDdQyBjk5IHLEU",
        university_name: "인천대학교",
        date: "2025-06-08",
        artist_ids: ["3AYq8OKAXBX9CxSSNUfi", "5pv65JZ0NpTwSjIb81aZ"],
        artist_names: ["청하", "장기하"],
    },
    {
        university_id: "RxIM7UfvEVLfm3FFGM29",
        university_name: "건국대학교",
        date: "2025-06-09",
        artist_ids: ["FtfQZKSFVqmYmroFqBRZ", "sRPuR5oF3ShFLsJ3BMJH"],
        artist_names: ["YB", "나상현씨밴드"],
    },
    {
        university_id: "RxIM7UfvEVLfm3FFGM29",
        university_name: "건국대학교",
        date: "2025-06-10",
        artist_ids: [
            "sRPuR5oF3ShFLsJ3BMJH",
            "xGu6Fex6EKufaVA7NWAc",
            "9SPAIih1KnLoLLgnrd1B",
        ],
        artist_names: ["나상현씨밴드", "키키", "하하&스컬"],
    },
    {
        university_id: "RxIM7UfvEVLfm3FFGM29",
        university_name: "건국대학교",
        date: "2025-06-11",
        artist_ids: [
            "c8UTBQtnis5vX0iwAqze",
            "8AgwHYrm3SelDX0D7eVr",
            "xGu6Fex6EKufaVA7NWAc",
        ],
        artist_names: ["크래비티", "빅나티", "키키"],
    },
];

module.exports = festivals;

async function uploadFestivals() {
    const colRef = collection(db, "festivals");

    for (const fest of festivals) {
        await addDoc(colRef, fest);
        console.log(`✅ 업로드 완료: ${fest.date} / ${fest.university_id}`);
    }

    console.log("🎉 모든 축제 데이터 업로드 완료!");
    process.exit();
}

uploadFestivals();
