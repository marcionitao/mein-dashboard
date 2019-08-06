<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <!-- barra com opeções -->
      <v-layout row class="mb-4">
        
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn class="ma-1" small outlined color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
        </template>
        <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn class="ma-1" small outlined  color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>      
          </template>
         <span>Sort projects by person</span>
        </v-tooltip>
        
      </v-layout>

      <v-layout justify-center class="mt-4">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in projects" :key="project.title">
            
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
              <v-expansion-panel-header>

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
                    <v-chip small :class="`vchip ${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
                  </div>
                </v-flex>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                {{ project.content }}
              </v-expansion-panel-content>
            </v-layout>

          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>

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
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }

}
</script>

<style lang="scss" scoped>

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
