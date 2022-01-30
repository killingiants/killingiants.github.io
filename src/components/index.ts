import tdButton from './button.vue';
import tdLink from './link.vue';
import dialog from './dialog.vue';
import loader from './loader.vue';
import logo from './logo.vue';
import navbar from './navbar.vue';
import icon from './icons/icon.vue';
import * as icons from './icons';
import post from './post.vue';


const components = {
  loader,
  logo,
  navbar,
  icon,
  ...icons,
  post,
};

function registerComponents(instance: any) {
  instance.component('td-button', tdButton);
  instance.component('td-link', tdLink);
  instance.component('td-dialog', dialog);
  instance.component('post', post);

  Object.entries(components).forEach((c) => instance.component(c[0], c[1]));
}

export default registerComponents;
