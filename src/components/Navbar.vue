<template>
   
   <v-card @click.stop="mini = !mini">
    
      <v-navigation-drawer app v-model="drawer" class="grey darken-4" :mini-variant.sync="mini" permanent>
        <!-- my avatar --> 
        <v-list-item>
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>
          
          <v-list-item-title class="white--text ml-4">Márcio Nitão</v-list-item-title>
         
          <v-btn icon  @click.stop="mini = !mini" class="title white--text">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        </v-list-item>

       
        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to='link.route'>
          
            <v-list-item-action>
              <v-icon class="white--text" :title="link.text">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

      </v-navigation-drawer>
  </v-card>
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
        mini: true,
        links: [
          { icon: 'home', text: 'Home', route: '/'},
          { icon: 'folder', text: 'Dashboard', route: '/dashboard'},
          { icon: 'person', text: 'About', route: '/about'},
        ]
      }
    },
        
  }
</script>

<style lang="scss" scoped>
  .dashColor {
    color: #212121;
  }

</style>