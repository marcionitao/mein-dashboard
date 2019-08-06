<template>
  <div class="about">
    <h1 class="subheading grey--text">This is an about page</h1>

     <v-container class="my-5">
      
      <v-card class="mx-auto" max-width="800" outlined>
        <v-list-item three-line>

          <v-list-item-content>
            <div class="overline mb-4">MEINDASHBAORD</div>
            <v-list-item-title class="headline mb-1">Welcome to my Portfolio</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            <v-list-item-content>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod amet optio velit veritatis doloremque asperiores debitis alias, molestias iste, impedit recusandae aliquid rem distinctio voluptate exercitationem natus doloribus aut quos.</v-list-item-content>
          </v-list-item-content>

          <v-list-item-avatar tile size="100" color="grey"></v-list-item-avatar>
          
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>