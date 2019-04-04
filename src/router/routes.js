const Index = resolve => require(['../views/index.vue'], resolve);
const Toast = resolve => require(['../views/toast.vue'], resolve);
const PageNotFound = resolve => require(['../views/404.vue'], resolve);

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/toast', name: 'toast', component: Toast },
  { path: '*', component: PageNotFound }
];

export default routes;
