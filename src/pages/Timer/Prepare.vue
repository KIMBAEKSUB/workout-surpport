<template>
    <div class="prepare" v-if="active">
        <div class="space-10"></div>
        <div class="prepare-title">fill in the items</div>
        <div class="input-wrap">
            <div class="input-item">
                <div class="prepare-string">
                    How many sets do you want
                </div>
                <input class="input-text" type="number" v-model="setCount">
            </div>
            <div class="input-item">
                <div class="prepare-string">
                    How long do you want time 1 set
                </div>
                <input class="input-text" type="number" v-model="timeCount">
            </div>
        </div>
        <div class="button-wrap">
            <button class="button" @click="next()">Next</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            setCount: 5,
            timeCount: 180,
        }
    },
    methods: {
        next(){
            this.$emit('next', {setCount: this.setCount, timeCount: this.timeCount})
        }
    }
}
</script>
<style>
.prepare {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.prepare-title {
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
}
.prepare-string {
    color: #b3b3b3;
    font-weight: 600;
    font-size: 0.7rem;
}
.input-wrap {
    width: 220px;
}
.input-text {
    border: none;
    height: 2.5rem;
    width: 100%;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b3b3b;

    border-bottom: 4px solid #e4e4e4;
    border-radius: 3px;
    outline: none;
}
.input-item {
    padding: 1rem 0;
}
.button-wrap {
    padding: 1rem;
}
.button{
    width: 6.5rem;
    padding: 0.5rem 2rem;
    margin: 1rem 1.3em;
    border: none;
    border-radius: 50px;
    color: #f0f8ff;
    background: #7d7dff;
    transition: all 0.2s;
}
.button:active {
    background: #5a5aff;
    box-shadow: 1px 1px 10px 5px rgb(236, 236, 236);

}
</style>