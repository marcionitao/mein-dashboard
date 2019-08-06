<template>
   
    <v-app-bar app dense color="grey lighten-4" elevate-on-scroll>
       
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Mein</span>
          <span class="dashColor">Dashboard</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- dropdown menu -->
        <v-menu offset-y>

          <template v-slot:activator="{ on }">
            <v-btn small color="grey" outlined v-on="on">
              <v-icon left >expand_more</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route" >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
     
  
      <v-navigation-drawer app v-model="drawer" class="blue" absolute temporary>
        <!-- my avatar -->
        <v-layout column align-center>
          <v-flex class="mt-2">
            <!-- <v-avatar size="100">
              <img src="/avatar-1.png">
            </v-avatar> -->
            <v-list-item>
              <v-avatar size="100">
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title white--text">Márcio Nitão</v-list-item-title>
                <v-list-item-subtitle class="white--text">marcionitao@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-flex>

          <v-divider></v-divider>
           <!-- my popup dialog -->
          <v-flex mt-4 mb-3>
            <Popup />
          </v-flex>

        </v-layout>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to='link.route'>
          
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

      </v-navigation-drawer>

    </v-app-bar>
</template>

<script>
  import Popup from './Popup';

  export default {
    name: 'Navbar',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Popup
    },
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