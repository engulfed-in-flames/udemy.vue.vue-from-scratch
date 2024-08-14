import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/Base/BaseCard.vue';
import BaseButton from './components/Base/BaseButton.vue';
import BaseDialog from './components/Base/BaseDialog.vue';

createApp(App)
  .component('BaseCard', BaseCard)
  .component('BaseButton', BaseButton)
  .component('BaseDialog', BaseDialog)
  .mount('#app');
