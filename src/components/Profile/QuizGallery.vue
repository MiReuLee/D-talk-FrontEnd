<template>
    <div class="quiz">
        <img alt="">
        <div>
            <div class="heart">983</div>
            <div>89일 전</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
    .quiz {
        width: 148px;
        height: 172px;
        background: #05dfd7;
        border-radius: 15px;
        text-align: center;
        padding: 12px;
        box-sizing: border-box;

        img {
            width: 124px;
            height: 124px;
            border-radius: 8px;
            background-color: #fff;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            color: #fff;

            .heart {
                display: flex;
                width: 57px;
                height: 22px;
                align-items: center;
                justify-content: center;
                background: #08C8C1;
                border-radius: 5px;

                &::before {
                    content: '';
                    width: 18px;
                    height: 17px;
                    background: url('img/profile/ic_heart.svg') center no-repeat;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
