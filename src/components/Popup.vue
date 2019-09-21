<template>
   <div class="text-center">
    <v-dialog width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="orange" v-on="on">
          Add new Project
        </v-btn>
      </template>

      <v-card>
       
        <v-card-title>
            <h2>Add new Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field name="title" label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                <v-menu>
                  <v-text-field :value="formattedDate" label="Due date" slot="activator" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                  <v-date-picker v-model="due"></v-date-picker>
                </v-menu>

                <v-spacer></v-spacer>

                <v-btn color="success mx-0 mt-3" @click="submit">Send</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import format from 'date-fns/format'

  export default {
    name: 'Popup',
    data() {
      return {
        title: '',
        content: '',
        due: null,
        inputRules: [
          v => v.length >= 3 || 'Minimum length is 3 characters'
        ]
      }
    },
    methods: {
      submit() {
       if (this.$refs.form.validate()) {
         // eslint-disable-next-line no-console
        console.log(this.title, this.content)
       }
      },
    },
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      formattedDate() {
        return this.due ? format(this.due, 'DD MMM YYYY') : ''
      }
    },
      
  }
</script>

<style lang="scss" scoped>

</style>