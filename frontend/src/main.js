import App from './App.vue'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faGlobeAsia, faUser, faDumbbell, faCalculator, faBars, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
// import secrets from '../secrets.json';
// import firebase from 'firebase';
import { articlesCollection } from './firebase'

library.add(faHome)
library.add(faGlobeAsia)
library.add(faCalculator)
library.add(faDumbbell)
library.add(faBars)
library.add(faLongArrowAltLeft)
library.add(faUser)

//Get an article from id (document)
articlesCollection.doc('RgChgEQUbmjyf9aKuZ3Q').get().then((doc) => {
    if (doc.exists){
        console.log("exists", doc.data());
    } else {
        console.log("No such document!");
    }
});
//Get all articles (collection)

articlesCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=>{
        console.log(doc.id, " => ", doc.data());
    })
});
const app = createApp(App);
app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
