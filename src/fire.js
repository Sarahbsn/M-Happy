import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBr8rAOwaMeazpEwgNHTezKkazvwa7S2Iw",
	authDomain: "m-happy-34a1d.firebaseapp.com",
	projectId: "m-happy-34a1d",
	storageBucket: "m-happy-34a1d.appspot.com",
	messagingSenderId: "709580069813",
	appId: "1:709580069813:web:e290c7f0d38276e97ed7fc",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
