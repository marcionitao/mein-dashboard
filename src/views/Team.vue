<template>
  <div class="team">
    <h1 class="subheading grey--text">This is an Team page</h1>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          
          <v-card flat class="text-xs-center ma-3">

            <v-responsive class="pt-4">
              <v-avatar size="100" color="grey">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
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
          { name: 'Marcio', role: 'Web Developer', avatar: '/avatar-1.png'},
          { name: 'Juca', role: 'Designer', avatar: '/avatar-2.png'},
          { name: 'Ze', role: 'Sales', avatar: '/avatar-4.png'},
          { name: 'Maria', role: 'Manager', avatar: '/avatar-6.png'}
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>