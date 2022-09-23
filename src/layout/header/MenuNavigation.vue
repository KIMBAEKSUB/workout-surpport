<template>
    <div v-if="active" class="menu-wrap" @click.self="closeMenu">
        <div class="menu">
            <div  class="menu-item" @click="redirectTo('/log')">Log</div>
            <div  class="menu-item" @click="redirectTo('/stopwatch')">StopWatch</div>
            <div  class="menu-item" @click="redirectTo('/weight')">Weight</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: Boolean
    },
    methods:{
        closeMenu(){
            this.$emit('closeMenu');
        },
        redirectTo(d){
            console.log(d)
            this.$emit('closeMenu');
             this.$router.push(d);
        }
    }
}
</script>
<style scoped>
.menu {
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    background: bisque;
    border-radius: 5px;
}
.menu-item {
    padding: 0.5rem;
    display: block;
    color: #9f9f9f;
}
.menu-item:active {
    background: rgb(255, 207, 148);
    border-radius: 5px;
    color: #7c7c7c;
}
.menu-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>