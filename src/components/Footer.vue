<template>
  <v-footer dark padless absolute>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Hector Hdz</strong>

          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>by NaerHdz</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>