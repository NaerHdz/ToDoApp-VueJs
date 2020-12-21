<template>
  <div>
    <Header />

    <v-main>
      <v-container>
        <ToDoList />
      </v-container>
    </v-main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ToDoList from "@/components/ToDoList.vue";

export default {
  name: "App",
  components: {
    Header,
    ToDoList,
    Footer,
  },
  data: () => ({}),
};
</script>
