Vue.component('navbar', {
  template:
  `
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand">
        {{ titleNavbar }}
      </a>
    </nav>
  </div>
  `,
  data() {
    return {
      titleNavbar: 'Carrito con boostrap'
    }
  }
})