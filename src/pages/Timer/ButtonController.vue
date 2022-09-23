<template>
    <div>
        <div v-if="timer != null">
            <span v-if="timer.countInit == timer.count">
                <button class="button clear" @click="back">
                    Back
                </button>
            </span>
            <span v-else>
                <button class="button clear" @click="clear">
                    Clear
                </button>
            </span>
            <span v-if="this.timerRun == false">
                <button class="button start" @click="start">
                    Start
                </button>
            </span>
            <span v-else>
                <button class="button stop" @click="stop">
                    Stop
                </button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        timerRun: {
            type: Boolean
        },
        timer: {
            type: Object
        }
    },
    methods: {
        back (){
            this.$emit('back')
        },
        start(){
            this.$emit('start')
        },
        clear(){
            this.$emit('clear')
        },
        stop (){
            this.$emit('stop')
        },
    },
}
</script>
<style scoped>
.button{
    width: 6.5rem;
    padding: 0.5rem 2rem;
    margin: 1rem 1.3em;
    border: none;
    border-radius: 50px;
    color: #f0f8ff;
}
.clear {
    background: #9d9d9d;
}
.start {
    background: #7d7dff;
}
.stop {
    background: #ff7d7d;
}
</style>