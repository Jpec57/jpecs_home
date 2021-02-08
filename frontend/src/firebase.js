import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import firebase from 'firebase';
import secrets from '../secrets.json';

//Firebase
var firebaseConfig = secrets.firebaseConfig;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const articlesCollection = db.collection('articles')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  articlesCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}