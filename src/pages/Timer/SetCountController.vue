<template>
    <div>
        <div class="space-10"></div>
        <div class="set-count">
            <div class="set-count-title">
                Your current set
            </div>
            <div class="set-count-string">
                <span class="left-icon" @click="setMinus()">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/></svg>
                </span>
                {{currentSet}}
                <span class="right-icon" @click="setPlus()">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg>
                </span>

            </div>
        </div>
        <div class="set-count-display">
            <div class="set-count-display-item" :class="{'done': isCurrentSet(1)}"></div>
            <div class="set-count-display-item" :class="{'done': isCurrentSet(2)}"></div>
            <div class="set-count-display-item" :class="{'done': isCurrentSet(3)}"></div>
            <div class="set-count-display-item" :class="{'done': isCurrentSet(4)}"></div>
            <div class="set-count-display-item" :class="{'done': isCurrentSet(5)}"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        currentSet: {
            type: Number
        },
        stepInit: {
            typeof: Number
        }
    },
    methods: {
        setMinus(){
            this.$emit('setMinus');
        },
        setPlus(){
            this.$emit('setPlus');
        },
        isCurrentSet(val) {
            return val <= this.currentSet;
        },
    }
}
</script>
<style scoped>
svg {
    fill: #b3b3b3;   
}
svg:active {
    fill: #616161;
}
.left-icon, .right-icon {
    display: inline-block;
    transform: translate(0%, -10%);
}
.set-count {
}
.set-count-title {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
}
.set-count-string {
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    font-weight: 700;
}
.set-count-display {
    display: flex;
    justify-content: space-around;
    width: 10rem;
}
.set-count-display-item {
    height: 11px; width: 1.4rem;
    border: 2px solid #ff7d7d; 
    border-radius: 3px;
}
.done {
    background: #ff7d7d;
}
</style>