<template>
   <div class="text-center">
    <v-dialog width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="orange" dark v-on="on">
          Add new Project
        </v-btn>
      </template>

      <v-card>
       
        <v-card-title>
            <h2>Add new Project</h2>
        </v-card-title>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        name: 'Popup',
        data() {
            return {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>