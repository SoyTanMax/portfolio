<template>
    <div class="projects">
        <div v-for="project in projects" :key="project.id">
            <Project :project="project"/>
        </div>
    </div>
</template>

<script>
import getProjects from '@/composables/getProjects'
import Project from '@/components/Project.vue'
export default {
    components: {
        Project
    },
    setup(){
        const { projects, error, load } = getProjects()
        load()
        return { projects, error }
    }
}
</script>

<style scoped>
    .projects{
        height: 100vh;
        background: white;
    }
</style>