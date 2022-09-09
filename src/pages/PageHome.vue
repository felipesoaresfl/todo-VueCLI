<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper">
        <img alt="Vue logo" src="../assets/logo.png" width="32" />
      </div>
    </nav>

    <div v-show="exibir.lista" style="padding: 20 px; margin: 20px">
      <button class="btn" @click="mostrarCadastro">Adicionar</button>
    </div>
    <!-- lista -->
    <div v-show="exibir.lista">
      <TarefaList :msg="'Welcome to Your Vue.js App'" :tasks="listaDeTarefa" />
    </div>

    <!-- form -->
    <div v-show="exibir.form">
      <TarefaForm
        :titulo="form.titulo"
        @salvarClick="recebiTarefas"
      ></TarefaForm>
    </div>
  </div>
</template>

<script>
import TasksApi from '../TasksApi.js'
import TarefaList from '../components/TarefaList.vue'
import TarefaForm from '../components/TarefaForm.vue'

export default {
  components: {
    TarefaList,
    TarefaForm,
  },
  data: () => {
    return {
      listaDeTarefa: [],
      exibir: { form: false, lista: true },
      form: {
        titulo: 'Cadastrar',
      },
    }
  },
  methods: {
    listarTarefas() {
      TasksApi.getTasks((data) => {
        this.listaDeTarefa = data
      })
    },
    mostrarCadastro() {
      this.exibir.form = true
      this.exibir.lista = false
    },
    recebiTarefas(novaTarefa) {
      TasksApi.createTask(novaTarefa, () => {
        console.log('recebi')
        this.listarTarefas()
        this.exibir.form = false
        this.exibir.lista = true
      })
    },
  },
  created() {
    this.listarTarefas()
  },
}
</script>

<style></style>
