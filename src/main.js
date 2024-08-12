import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGoogle, faFacebookF, faUser, faEnvelope, faLock, faArrowLeft)
createApp(App).use(router).mount('#app')
App.component('font-awesome-icon', FontAwesomeIcon)
App.mount('#app')
