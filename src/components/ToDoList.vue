<template>
  <div>
    <v-text-field
      v-model="task.text"
      label="Nueva Tarea"
      outlined
      append-icon="send"
      v-on:keyup.enter="addTask"
      @click:append="addTask"
    ></v-text-field>

    <v-simple-table
      style="overflow-y: scroll"
      :fixed-header="true"
      :height="370"
      dark
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th style="text-align: left">Terminado</th>
            <th style="text-align: left">Tarea</th>
            <th style="text-align: left">Borrar Tareas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tasks" :key="item._id">
            <td>
              <v-simple-checkbox
                v-model="item.check"
                @click="modifyTask(item._id, item.check, item.text)"
              ></v-simple-checkbox>
            </td>
            <td>
              <v-text-field
                v-model="item.text"
                append-icon="send"
                @click:append="modifyTask(item._id, item.check, item.text)"
                v-on:keyup.enter="modifyTask(item._id, item.check, item.text)"
              ></v-text-field>
            </td>
            <td>
              <v-icon small @click="deleteTask(item._id)"> delete </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    task: { _id: null, check: false, text: "" },
    tasks: [],
  }),
  created() {
    this.getTasks();
  },
  methods: {
    async addTask() {
      if (this.task.text) {
        let response = await fetch("http://localhost:3000/api/task/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: this.task.text }),
        });
        this.getTasks();
        this.$swal("Listo!", "Tarea Agregada", "success");
      } else {
        this.$swal("Error!", "El campo esta vacio", "error");
      }
    },
    async modifyTask(id, check, text) {
      if (!text) {
        this.$swal("Error!", "El campo esta vacio", "error");
      }

      let response = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text, check: check }),
      });

      if (response) {
        this.getTasks();
      }
    },
    async getTasks() {
      let response = await fetch("http://localhost:3000/api/task/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        this.task.text = "";
        this.tasks = [];
        response = await response.json();
        for (let i = 0; i < response.tasks.length; i++) {
          this.tasks.push(response.tasks[i]);
        }
      }
    },
    async deleteTask( id ) {
      let response = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if ( response ) {
        this.getTasks();
        this.$swal("Listo!", "Tarea Borrada", "success");
      }
    }
  }
};
</script>