<template>
    <nav>
      <v-toolbar app flat>

        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Mein</span>
          <span>Dashboard</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
        
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="indigo" temporary dark>
        <p>Test</p>
      </v-navigation-drawer>

    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        drawer: false,
      }
    },
        
  }
</script>

<style lang="scss" scoped>

</style>