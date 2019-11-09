import Vue from 'vue'
import App from './App.vue'
import  'animate.css'
Vue.config.productionTip = false
import  './assets/css/base.css'
import router from './plugins/router.js'
import serve from './config/serve.js'
Vue.prototype.baseUrl=serve.baseUrl

import { Field } from 'vant';
Vue.use(Field);
import { Button } from 'vant';
Vue.use(Button);
import { Panel } from 'vant';
import { Cell, CellGroup } from 'vant';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
Vue.use(Cell).use(CellGroup);
Vue.use(Panel);
new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
