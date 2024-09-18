import Typed from 'typed.js';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      typed: (el, options) => new Typed(el, options),
    },
  };
});