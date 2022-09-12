<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul class="collection">
      <input type="text" v-model="pesquisa" />
      <li v-for="t in tarefasFiltradas" :key="t.id" class="collection-item">
        <h5>
          {{ t.title }}
          <span class="task-badge right-align">{{ t.project }}</span>
        </h5>
        <button class="btn btn-small" @click="editarClick(t.id)">Editar</button>
        <button
          style="margin-left: 10px"
          class="btn btn-small excluir"
          @click="excluirTarefa(t.id)"
        >
          Excluir
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    tasks: Array,
  },
  data() {
    return {
      pesquisa: '',
    }
  },
  methods: {
    editarClick(tarefaId) {
      this.$emit('editarClick', tarefaId)
    },
    excluirTarefa(tarefaId) {
      this.$emit('excluirTarefa', tarefaId)
    },
  },
  computed: {
    tarefasFiltradas() {
      return this.tasks.filter((e) =>
        e.title.toLowerCase().includes(this.pesquisa.toLowerCase())
      )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
}
.excluir {
  background-color: rgb(223, 69, 69);
}
</style>
