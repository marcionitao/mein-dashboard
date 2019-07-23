<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <!-- barra com opeções -->
      <v-layout row class="mb-3">
        <v-btn small flat color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By Project name</span>
        </v-btn>

        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <!-- definir uma classe chamada project que irá alterar as propriedades do Status -->
        <v-layout row wrap :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
           <div class="right">
             <v-chip small :class="` vchip ${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
           </div>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        { title: 'Design a new Website', person: 'Marcio', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Create new banner', person: 'Juca', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Send emails', person: 'Ze', due: '20th Dez 2018', status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Create Community Forum', person: 'Maria', due: '20th Out 2018', status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'}
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }

}
</script>

<style>
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  .vchip.complete {
    background: #3cd1c2;
  }
  .vchip.ongoing {
    background: orange;
  }
  .vchip.overdue {
    background: tomato;
  }
  
</style>
