import Vue from 'vue';
import App from './App.vue';
import router from './router';

import axios from "axios"
Vue.config.productionTip = false
import './assets/js/rem'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/img/home/loading.jpg')
})






import { Button, Icon, Tabs, TabPane, Message, Form, FormItem, Input, Carousel, CarouselItem, Row, Col, InputNumber, Rate, Checkbox, Card, Badge, Backtop } from 'element-ui';

Vue.component(Badge.name, Badge)
Vue.use(Backtop);
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Rate.name, Rate);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Card.name, Card);
Vue.prototype.$message = Message;



Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
