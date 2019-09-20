<template>
  <div class="team">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md2 lg2 v-for="person in team" :key="person.name">
          
          <v-card class="text-xs-center ma-3">

            <v-card-actions class="justify-center">
              <v-img max-width="100px" :src="person.avatar"></v-img>
            </v-card-actions>

            <v-card-title class="justify-center">{{ person.name }}</v-card-title>
            <v-card-text class="text-center">{{ person.role }}</v-card-text>

          </v-card>
        
        </v-flex>
      </v-layout>
      
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          { name: 'Java', role: 'web', avatar: '/java.png'},
          { name: 'Angular', role: 'web', avatar: '/angular.png'},
          { name: 'Node', role: 'web', avatar: '/node.png'},
          { name: 'Vue', role: 'web', avatar: '/vue.png'},
          { name: 'Ionic', role: 'mobile', avatar: '/ionic.png'},
          { name: 'Flutter', role: 'mobile', avatar: '/flutter.png'},
          { name: 'Firebase', role: 'data base', avatar: '/firebase.png'},
          { name: 'MySQL', role: 'data base', avatar: '/mysql.png'},
          { name: 'Mongo', role: 'data base', avatar: '/mongo.png'},
          { name: 'Wordpress', role: 'cms', avatar: '/wordpress.png'},
          { name: 'Xd', role: 'prototype', avatar: '/xd.png'},
          { name: 'Figma', role: 'prototype', avatar: '/figma.png'},
        ],
        items: [
          { text: 'Home', disabled: false, href: 'breadcrumbs_dashboard' },
          { text: 'Skills', disabled: true, href: 'breadcrumbs_link_1'},     
        ],
      }
    },
  }
</script>   

<style lang="scss" scoped>

</style>