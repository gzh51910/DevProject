import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false
import './assets/js/rem'
import { Button, Icon, Tabs, TabPane, Form, FormItem, Input } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

