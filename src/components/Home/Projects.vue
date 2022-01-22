<template>
    <div class="projects section">
        <div class="is-size-3 has-text-weight-bold has-text-centered-mobile">My Portfolio</div>
        <div class="project-container">
            <div v-for="project in projects" :key="project.id">
                <Project :project="project"/>
            </div>
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
        height: fit-content;
        background: white;
        padding-right: var(--padding-desktop);
        padding-left: var(--padding-desktop);
        font-family: 'Nunito', sans-serif;
    }
    .project-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
        gap: 32px;
        margin-top: 24px !important;
    }
    /* mobile */
    @media screen and (max-width: 769px) {
        .projects{
            padding-right: var(--padding-mobile);
            padding-left: var(--padding-mobile);
        }
    }
</style>