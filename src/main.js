/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("destaque", {
  bind(el, binding, vnode) {
    let atraso = 0;
    if (binding.modifiers["atrasar"]) atraso = 3000;

    if (binding.arg === "fundo") {
      setTimeout(() => {
        el.style.backgroundColor = binding.value || "lightgreen";
      }, atraso);
    } else {
      setTimeout(() => {
        el.style.color = binding.value || "lightgreen";
      }, atraso);
    }
  }
});

Vue.directive("demo", {
  bind: function(el, binding, vnode) {
    var s = JSON.stringify;
    el.innerHTML =
      "name: " +
      s(binding.name) +
      "<br>" +
      "value: " +
      s(binding.value) +
      "<br>" +
      "expression: " +
      s(binding.expression) +
      "<br>" +
      "argument: " +
      s(binding.arg) +
      "<br>" +
      "modifiers: " +
      s(binding.modifiers) +
      "<br>" +
      "vnode keys: " +
      Object.keys(vnode).join(", ");
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
