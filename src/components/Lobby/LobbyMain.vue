<template>
    <div class="wrap">
        <div class="left-wrap">
            <!-- 내가 받은 그림 -->
            <article class="quiz">
                <h1>내가 받은 그림</h1>
                <div>
                    <div
                        v-for="q in gotQuizArr"
                        :key="q.quizIdx"
                    >
                        <img alt="" src="">
                        <p />
                        <small />
                    </div>
                </div>
            </article>
            <!-- 랭킹 -->
            <article class="rank">
                <nav>
                    <button v-text="$locale.paint" />
                    <button v-text="$locale.user" />
                </nav>
            </article>
        </div>
        <!-- 모드 선택 -->
        <article class="mode">
            <button>START</button>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const gotQuizArr: any[] = [];

        return {
            gotQuizArr
        };
    }
});
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        justify-content: center;
        height: 455px;
        padding: 0 8vw;

        > * {
            width: 415px;
        }

        .left-wrap {
            display: flex;
            flex-direction: column;
            margin-right: 22px;

            .quiz, .rank {
                flex: 1;
                border-radius: 30px;
                overflow: hidden;
                box-shadow: 0px -5px inset #2eb8a5;
            }

            .quiz {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;

                h1 {
                    height: 53px;
                    line-height: 53px;
                    text-align: center;
                    font-size: 22px;
                    color: #fff;
                    background: #47BCA1;
                    margin: 0;
                }

                div {
                    flex: 1;
                    background: #4EDDBF;
                }
            }

            .rank {
                background: #42DCC1;
            }
        }

        .mode {
            // grid-area: mode;
        }
    }
</style>
