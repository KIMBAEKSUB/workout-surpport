<template>
    <div class="count-wrap" :class="{'run': timerRun}">
        <div class="count">
            <div class="display">
            {{count}}
            </div>
            <div class="display-string">
                second
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        count: {
            type: Number
        },
        timerRun: {
            type: Boolean
        }
    }
}
</script>
<style scoped>
.count-wrap {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #7d7dff 3px solid;
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
    transition: all 0.3s;
}
.display {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: #7d7dff;
    transition: all 0.3s;
}
.display-string {
    text-align: center;
    color: #b7b7ff;
    transition: all 0.3s;
}
.run {
    background: #aaaaff;
    border: #e0e0ff 3px solid;
}
.run .display, .run .display-string {
    color: #f0f8ff;
}
</style>