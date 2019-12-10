Vue.component('titulo', {
  template:
  `
  <div>
    <h1 class="text-center">{{ titulo }}</h1>
    <br>
    <lista :frutas="frutas"></lista>
  </div>
  `,
  data() {
    return {
      titulo: 'Carrito con boostrap',
      frutas: []
    }
  }
})