<template>
  <div>
    <h2>{{ titulo }}</h2>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Entre com a tarefa"
      :value="title"
      @input="form.title = $event.target.value"
    />
    <input
      type="text"
      name="project"
      :value="project"
      @input="form.project = $event.target.value"
      placeholder="Entre com um projeto"
    />
    <button class="btn" @click="salvarTarefa">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'title', 'project', 'btn', 'id'],
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
        title: this.form.title || this.title,
        project: this.form.project || this.project,
      }
      if (this.btn == 'Adicionar') {
        novaTarefa.date = new Date().toLocaleDateString('pt')
        this.$emit('salvarClick', novaTarefa)
      } else {
        novaTarefa.id = this.id
        this.$emit('alterarClick', novaTarefa)
      }
    },
  },
}
</script>
