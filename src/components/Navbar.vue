<template>
    <nav>
      <v-toolbar app flat>

        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Mein</span>
          <span class="dashColor">Dashboard</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- dropdown menu -->
        <v-menu offset-y>

          <v-btn flat slot="activator" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>

          <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.router" >
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
        
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="indigo" temporary dark>
        
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="/avatar-1.png">
            </v-avatar>
            <p class="white--text subheading mt-1">Marcio Nitao</p>
          </v-flex>
        </v-layout>

        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to='link.route'>
          
            <v-list-tile-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>

      </v-navigation-drawer>

    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        drawer: false,
        links: [
          { icon: 'dashboard', text: 'Dashboard', route: '/'},
          { icon: 'folder', text: 'My Projects', route: '/projects'},
          { icon: 'person', text: 'Team', route: '/team'},
          { icon: 'info', text: 'About', route: '/about'},
        ]
      }
    },
        
  }
</script>

<style>
  .dashColor {
    color: #FF00FF;
  }

</style>