<template>
  <div class="projects">
    <h1 class="subheading grey--text">This is an Projects page</h1>

    <v-container class="my-5">

      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
       projects: [
        { title: 'Design a new Website', person: 'Marcio', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Create new banner', person: 'Juca', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Send emails', person: 'Ze', due: '20th Dez 2018', status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'},
        { title: 'Create Community Forum', person: 'Maria', due: '20th Out 2018', status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore deserunt incidunt sint deleniti, nobis dignissimos porro quas laborum fugiat similique placeat quia fuga animi, nihil delectus asperiores molestiae sunt.'}
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Marcio';
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>