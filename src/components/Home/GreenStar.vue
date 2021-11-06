<template> 
    <div class="circle4">
        <div class="circle3">
            <div class="circle2">
                <div class="circle1"></div>
            </div>
        </div>
    </div>   
</template>

<script>
    export default {
        name: 'GreenStar'
    }
</script>

<style scoped>

.circle1{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(131, 255, 34, 0.6) 0%, rgba(255, 230, 0, 0.6) 100%);
    transform-origin: 50% 50%;
    animation: pop 0.5s ease-out;
}
.circle2{
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(134, 255, 33, 0.15) 0%, rgba(243, 232, 4, 0.15) 100%);
    transform-origin: 50% 50%;
    animation: pop 0.7s ease-out;
}
.circle3{
    display: grid;
    place-items: center;
    height: 77px;
    width: 77px !important;
    background: linear-gradient(180deg, rgba(134, 255, 33, 0.15) 0%, rgba(243, 232, 4, 0.15) 100%);
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: pop 0.9s ease-out;
}
.circle4{
    display: grid;
    place-items: center;
    height: 96px;
    width: 96px !important;
    background: linear-gradient(180deg, rgba(134, 255, 33, 0.15) 0%, rgba(243, 232, 4, 0.15) 100%);
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: pop 1.1s ease-out;
}


</style>