import App from './App.vue'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faGlobeAsia, faUser, faThumbsUp, faThumbsDown, faDumbbell, faCalculator, faBars, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faHome)
library.add(faGlobeAsia)
library.add(faCalculator)
library.add(faDumbbell)
library.add(faBars)
library.add(faLongArrowAltLeft)
library.add(faUser)
library.add(faThumbsUp)
library.add(faThumbsDown)

const app = createApp(App);
app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
