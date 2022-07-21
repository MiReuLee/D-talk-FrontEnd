<template>
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <article @click="sendTarget = null">
        <div>
            <template v-if="sendTarget">
                <div class="profile">
                    <img alt="">
                    <p v-text="sendTarget.nickname" />
                </div>
                <p class="send">{{ sendTarget.nickname }} 님께 퀴즈 전달 완료!</p>
            </template>
            <template v-else>
                <div
                    v-for="f in friendArr"
                    :key="f.idx"
                    class="friend"
                >
                    <div>
                        <img alt="">
                        <span v-text="f.nickname" />
                        <button
                            :class="{ hide: f.isSend }"
                            @click="send(f)"
                        >
                            <span>보내기</span>
                        </button>
                    </div>
                </div>
            </template>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { getFriend, sendQuiz } from '@/util/api';

export default defineComponent({
    props: {
        quizIdx: {
            type: Number,
            required: true
        }
    },
    async setup(props) {
        const friendArr = await getFriend();
        const sendTarget: Ref<any> = ref(null);
        // const sendTarget: Ref<any> = ref({ idx: 5, nickname: '석성희' });

        return {
            friendArr,
            sendTarget,
            async send(f: any) {
                await sendQuiz(props.quizIdx, f.idx);

                f.isSend = true;

                sendTarget.value = f;
            }
        };
    }
});
</script>

<style lang="scss" scoped>
    article {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;

        > div {
            background: #B9B9B9;
            width: 327px;
            height: 344px;
            border-radius: 30px;
            padding: 10px;
            box-sizing: border-box;
            box-shadow: 0px -5px inset #9E9E9E;

            .profile {
                width: 188px;
                height: 213px;
                background: #959595;
                padding: 12px;
                box-sizing: border-box;
                font-size: 22px;
                color: #fff;
                margin: 37px auto 30px;
                text-align: center;
                border-radius: 25px;

                img {
                    width: 165px;
                    height: 165px;
                }

                p {
                    margin: 0;
                }
            }

            .send {
                font-size: 20px;
                color: #fff;
                text-align: center;
            }

            .friend {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 109px;
                background: #cdede1;
                border-radius: 25px;
                padding: 0 14px;
                margin-bottom: 10px;

                > div {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-between;

                    img {
                        width: 85px;
                        height: 85px;
                        background: #fff;
                        border-radius: 20px;
                        margin-right: 5px;
                    }

                    span {
                        font-weight: bold;
                        font-size: 20px;
                        color: #047068;
                    }
                }

                button {
                    position: relative;
                    width: 125px;
                    height: 52px;
                    background: rgba(255, 255, 255, 0.6);
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;

                    &::before {
                        content: '';
                        position: absolute;
                        width: 115px;
                        height: 42px;
                        left: 0;
                        top: 0;
                        background-image: linear-gradient(to bottom, #ffa8a8 0%, #ff77b5 100%);
                        border-radius: 20px;
                        margin: 5px;
                    }

                    span {
                        position: relative;
                        font-weight: bold;
                        font-size: 18px;
                        color: #fff;
                        z-index: 1;
                    }

                    &.hide {
                        visibility: hidden;
                        pointer-events: none;
                    }
                }
            }
        }
    }
</style>
