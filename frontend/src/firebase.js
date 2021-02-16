import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import secrets from '../secrets.json';

var firebaseConfig = secrets.firebaseConfig;
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const articlesCollection = db.collection('articles');
// .orderBy('createdAt')
// const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  articlesCollection,
  commentsCollection,
}