import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false
import './assets/js/rem'

import { Button, Icon, Tabs, TabPane, Form, FormItem, Input,Carousel,CarouselItem,Row,Col,InputNumber,Rate,Checkbox} from 'element-ui';
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


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
