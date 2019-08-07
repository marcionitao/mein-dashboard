<template>

    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>


</template>

<script>
export default {
    data() {
        return {
            items: [
                { text: 'Home', disabled: true, href: 'breadcrumbs_dashboard' },   
            ],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>