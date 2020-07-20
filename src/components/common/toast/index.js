import Toast from './toast'
const obj = {}
obj.install = function(vue) {
  //创建组件构造器
  const toastConstrustor = vue.extend(Toast);
  //创建一个组件对象
  const toast = new toastConstrustor();
  //手动挂载一个节点
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);
  vue.prototype.$toast = toast;
  console.log("toast");
}
export default obj
