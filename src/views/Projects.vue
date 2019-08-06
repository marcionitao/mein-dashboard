<template>
  <div class="projects">

     <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-container class="my-5">

    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
        items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'My Proojects',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
       
      ],
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