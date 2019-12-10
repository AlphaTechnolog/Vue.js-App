Vue.component('lista', {
  template:
  `
  <div>
    <ul class="list-group">
      <span v-if="frutas.length <= 0">
        <div class="alert alert-danger" role="alert">
          <h3 class="alert-heading text-center">
            ¡No existe ningún producto agregado!
          </h3
        </div>
      </span>
      <li v-for="item of frutas" :key="item.id" @click="item.cantidad++"
      class="li-pointer-cursor list-group-item d-flex justify-content-between align-items-center">
          {{ item.nombre }} 
          <span v-if="item.cantidad <= 0">
            --- Sin Stock ---
          </span>
        <span class="badge badge-primary badge-pill">
          {{ item.cantidad }}
        </span>
        <button
          type="button"
          @click="item.cantidad = 0; item.cantidad--"
          class="btn btn-danger"
        >
          {{ btnResetear }}
        </button>
      </li>
    </ul>
    <br>
    <input
      type="text"
      class="form-control center"
      @keyup.enter="agregarItem"
      v-model="nuevoItem"
      placeholder="Nombre de el nuevo elemento ha agregar"
    />
    <br>
    <button
      type="button"
      @click="agregarItem"
      class="btn btn-success btn-lg btn-block"
    >
      Agregar Nuevo Item
    </button>
  </div>
  `,
  props: [
    'frutas'
  ],
  data() {
    return {
      btnResetear: 'Resetear Cantidad',
      nuevoItem: ''
    }
  },
  methods: {
    agregarItem() {
      if (this.nuevoItem != '') {
        this.frutas.push(
          { nombre: this.nuevoItem, cantidad: 0 }
        )
        this.nuevoItem = '';
      }
    }
  }
})