<template>
    <img alt="">
    <div class="input-wrap">
        <span>닉네임</span>
        <input>
        <button>변경</button>
    </div>
    <div class="stat">

    </div>
    <button class="pw-change">비밀번호 변경</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getQuizCnt, getFriendCnt } from '@/util/api';

export default defineComponent({
    async created() {
        const friendCnt = await getFriendCnt();
        console.log(friendCnt);

        const quizCnt = await getQuizCnt();
        console.log(quizCnt);
    }
});
</script>

<style lang="scss" scoped>
    img {
        width: 189px;
        height: 189px;
        background: #fff;
        border: 12px solid rgba(0, 0, 0, 0.1);
        border-radius: 25px;
        margin-bottom: 10px;
    }

    .input-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 245px;
        height: 40px;
        font-weight: bold;
        font-size: 12px;
        color: #7a7a7a;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 20px;

        span {
            margin-right: 5px;
        }

        input {
            width: 125px;
            height: 26px;
            font-weight: bold;
            font-size: 12px;
            color: #7a7a7a;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 5px;
            margin-right: 10px;
            padding: 0 6px;
            outline: none;
            box-sizing: border-box;
        }

        button {
            width: 54px;
            height: 24px;
            font-weight: bold;
            font-size: 12px;
            color: #fff;
            background-image: linear-gradient(to bottom, #ffa8a8 0%, #ff77b5 100%);
            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 12px;
        }
    }

    .stat {
        width: 360px;
        height: 105px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        margin-bottom: 15px;
    }

    .pw-change {
        font-weight: bold;
        font-size: 12px;
        color: #7a7a7a;
        background: none;
        border: none;
        cursor: pointer;
    }
</style>
