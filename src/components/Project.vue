<template>
    <div class="project block columns" :style="{'backgroundImage': `url(${project.image})` }">
        <div class="column"></div>
        <div class="details column is-three-fifths">
            <img :src="project.logo" alt="" class="logo">
            <div :class="{'is-purple': project.number == 2}">{{ project.description }}</div>
            <div class="work has-text-grey-dark" v-for="work in project.works" :key='work.id' >
                {{ work }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>

<style scoped>
.project{
    border-radius: 24px;
    color: white;
    display: flex;
    padding: 24px 12px;
    min-height: 270px;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: 300ms;
}
.project:hover{
    transform: scale(1.02);
}
.logo{
    max-width: 90%;
    margin-bottom: 18px !important;
}
.is-purple{
    color: #7F86FB;
}
.work{
    display: inline-block;
    margin-right: 12px !important;
    margin-top: 12px !important;
    background: white;
    padding: 4px 8px;
    border-radius: 8px;
}
</style>