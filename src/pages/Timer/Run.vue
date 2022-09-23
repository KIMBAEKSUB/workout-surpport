<template>
    <div class="timer" v-if="active">
        <SetCountControllerVue
            :currentSet="currentSet"
            :stepInit="timer.stepInit"
            @setMinus="setMinus"
            @setPlus="setPlus"
        />
        <CountDownDisplayVue
            :count="timer.count"
            :timerRun="timer.run"
        />
        <ButtonControllerVue 
            :timerRun="timer.run"
            :timer="timer"
            @back="back"
            @start="start"
            @stop="stop"
            @clear="clear"
        />
    </div>
</template>
<script>
import SetCountControllerVue from './SetCountController.vue';
import CountDownDisplayVue from './CountDownDisplayController.vue';
import ButtonControllerVue from './ButtonController.vue';
export default {
    props: {
        active: {
            required: true,
            type: Boolean
        },
        initCountTime: {
            required: true,
            type: Number
        },
        initSetCount: {
            required:true,
            type: Number
        },
    },
    watch: {
        active(val){
            if(val)
            {
                this.init(this.initSetCount, this.initCountTime)
            }
        }
    },
    data() {
        return {
            timer: {
                stepInit: 0,
                currentSet: 0,
                run: false,
                countInit: 0,
                count: 0,
                interval: null,
            },
            command: {
                start: 0,
                stop: 1,

            },
        }
    },
    components: {
        ButtonControllerVue,
        SetCountControllerVue,
        CountDownDisplayVue,
    },
    computed: {
        currentSet: {
            get(){
                return this.timer.currentSet;
            },
            set(val){
                if(this.timer.currentSet == 0 && val == -1) {
                    return;
                }
                if(this.timer.currentSet == this.timer.stepInit && val == this.timer.stepInit + 1) {
                    return;
                }
                this.timer.currentSet = val;
            },
        },
        countTime: {
            get() {
                return this.timer.count;
            },
            set(val) {
                if(this.timer.count == 0 && val == -1) {
                    this.setPlus();
                    this.clear();
                    return;
                }
                this.timer.count = val;
            },
        }
    },
    methods: {
        
        init(setCount, timeCount) {
            this.timer.stepInit = setCount
            this.timer.currentSet = 0
            this.timer.run = false;
            this.timer.count = timeCount;
            this.timer.countInit = timeCount;
        },
        setMinus(){
            this.currentSet -= 1;
        },
        setPlus(){
            this.currentSet += 1;
        },
        start(){
            if(this.currentSet + 1 == 6)
            {
                alert('done working out')
                return;
            }
            this.timer.run = true;
            this.timer.interval = setInterval(() => {
                this.countTime -= 1;
            }, 1000);
        },
        stop (){
            this.timer.run = false;
            clearInterval(this.timer.interval);
        },
        clear(){
            this.stop();
            this.countTime = this.timer.countInit;
        },
        back (){
            this.$emit('back');
        },
    }
}
</script>
<style scoped>

</style>