import tdButton from './button.vue';
import tdLink from './link.vue';
import dialog from './dialog.vue';
import loader from './loader.vue';
import logo from './logo.vue';
import navbar from './navbar.vue';
import icon from './icons/icon.vue';
import * as icons from './icons';

const components = {
  loader,
  logo,
  navbar,
  icon,
  ...icons,
};

function registerComponents(instance: any) {
  // eslint-disable-next-line vue/component-definition-name-casing
  instance.component('td-button', tdButton);
  // eslint-disable-next-line vue/component-definition-name-casing
  instance.component('td-link', tdLink);
  // eslint-disable-next-line vue/component-definition-name-casing
  instance.component('td-dialog', dialog);

  Object.entries(components).forEach((c) => instance.component(c[0], c[1]));
}

export default registerComponents;
