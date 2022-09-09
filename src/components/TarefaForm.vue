<template>
  <div>
    <h2>Cadastrar Tarefa</h2>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Entre com a tarefa"
      v-model="form.title"
    />
    <input
      type="text"
      name="project"
      v-model="form.project"
      placeholder="Entre com a projeto"
    />
    <button class="btn" @click="salvarTarefa">Salvar</button>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
  data: () => {
    return {
      form: {
        title: '',
        project: '',
      },
    }
  },
  methods: {
    salvarTarefa() {
      const novaTarefa = {
        title: this.form.title,
        project: this.form.project,
        date: new Date().toLocaleDateString('pt'),
      }
      this.$emit('z', novaTarefa)
    },
  },
}
</script>
