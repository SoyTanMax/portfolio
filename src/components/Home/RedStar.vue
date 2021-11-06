<template>    
    <div class="circle3">
        <div class="circle2">
            <div class="circle1"></div>
        </div>
    </div>
</template>

<style scoped>

.circle1{
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255, 219, 31, 0.6) 0%, rgba(255, 77, 0, 0.6) 100%);
    transform-origin: 50% 50%;
    animation: pop 0.5s ease-out;
}
.circle2{
    display: grid;
    place-items: center;
    width: 49.5px;
    height: 49.5px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255, 219, 31, 0.15) 0%, rgba(255, 77, 0, 0.15) 100%);
    transform-origin: 50% 50%;
    animation: pop 0.7s ease-out;
}
.circle3{
    display: grid;
    place-items: center;
    height: 66px;
    width: 66px !important;
    background: linear-gradient(180deg, rgba(255, 219, 31, 0.15) 0%, rgba(255, 77, 0, 0.15) 100%);
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: pop 0.9s ease-out;
}


</style>