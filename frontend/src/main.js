import App from './App.vue'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faGlobeAsia, faDumbbell, faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faHome)
library.add(faGlobeAsia)
library.add(faCalculator)
library.add(faDumbbell)




/*
const GREY = "#e7e7de";
const BLUE_GREEN = "#008891";
const BLUE = "#00587a";
const DARK_BLUE = "#0f3057";
*/

const app = createApp(App);
app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
