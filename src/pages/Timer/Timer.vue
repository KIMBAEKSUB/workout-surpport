<template>
    <div class="timer">
        <Prepare
            :active="currentDispayIndex == prepareIndex"
            @next="showTimer"
        />
        <RunComponent
            :active="currentDispayIndex == timerIndex"
            :initSetCount="init.setCount != null ? init.setCount : null"
            :initCountTime="init.timeCount != null ? init.timeCount : null"
            @back="changeIndex"
        />
    </div>
</template>
<script>
import Prepare from './Prepare.vue';
import RunComponent from './Run.vue';
export default {
    data() {
        return {
            displayIndex: 0,
            prepareIndex: 0,
            timerIndex: 1,
            init: {
                setCount: null,
                timeCount: null
            },
        }
    },
    computed: {
        currentDispayIndex: {
            get(){
                return this.displayIndex;
            },
            set(val){
                if(val == 2){
                    this.displayIndex = 0;
                    return;    
                }
                this.displayIndex = val;
            }
        }
    },
    components: {
        RunComponent,
        Prepare,
    },
    methods: {
        showTimer(val){
            this.init= val;
            this.changeIndex()
        },
        changeIndex(){
            this.currentDispayIndex += 1
        }
    }
}
</script>
<style scoped>

.timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>