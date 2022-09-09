import axios from 'axios'

export default {
  getTasks: (callback) => {
    axios.get('http://localhost:3000/tasks/').then((response) => {
      callback(response.data)
    })
  },
  createTask: (task, callback) =>
    axios
      .post('http://localhost:3000/tasks/', task)
      .then((response) => callback(response.data)),
}
