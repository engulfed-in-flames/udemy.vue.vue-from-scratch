import { createApp } from 'vue';

import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';
import App from './App.vue';

createApp(App)
  .component('BaseCard', BaseCard)
  .component('BaseButton', BaseButton)
  .mount('#app');
