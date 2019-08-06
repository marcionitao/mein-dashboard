<template>
  <div class="projects">

    <v-container class="my-5">

      <v-btn small color="grey" outlined>
        <v-icon left>folder</v-icon>
          <span>Projects ></span>
      </v-btn>

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