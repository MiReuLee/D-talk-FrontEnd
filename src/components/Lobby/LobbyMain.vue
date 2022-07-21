<template>
    <article class="wrap">
        <section class="header">
            <div>
                <router-link
                    class="profile"
                    :to="{ name: 'MyInfo' }"
                />
            </div>
            <div>
                <router-link
                    class="main"
                    to="/"
                />
            </div>
            <div>
                <router-link
                    class="friend"
                    :to="{ name: 'MyFriend' }"
                />
                <router-link
                    class="setting"
                    to="/"
                />
            </div>
        </section>
        <section class="contents">
            <section class="left">
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
                        <button
                            :class="{ active: rankTy === 0 }"
                            @click="rankTy = 0"
                        >그림</button>
                        <button
                            :class="{ active: rankTy === 1 }"
                            @click="rankTy = 1"
                        >유저</button>
                    </nav>
                </article>
            </section>
            <!-- 모드 선택 -->
            <article class="mode">
                <h1>게임모드</h1>
                <div>
                    <i />
                    <p>친구들과 그림퀴즈를 주고 받으세요!</p>
                </div>
                <router-link
                    :to="{ name: 'DrawWorkspace' }"
                >START</router-link>
            </article>
        </section>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const gotQuizArr: any[] = [];

        const rankTy = ref(0);

        return {
            gotQuizArr,
            rankTy
        };
    }
});
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        flex-direction: column;
        max-width: 852px;

        .header {
            display: flex;
            margin-bottom: 40px;

            > * {
                flex: 1;
                text-align: center;

                &:first-child {
                    text-align: left;
                    padding-top: 35px;
                }

                &:last-child {
                    text-align: right;
                    padding-top: 35px;
                }
            }

            a {
                display: inline-block;

                &.main {
                    width: 265px;
                    height: 156px;
                    background: url('img/logo.svg') center no-repeat;
                    background-size: contain;
                }

                &.profile {
                    width: 50px;
                    height: 50px;
                    background: #fff;
                    border-radius: 16px;
                }

                &.friend {
                    width: 58px;
                    height: 46px;
                    background: url('img/lobby/ic_friend.svg') center no-repeat;
                    margin-right: 15px;
                }

                &.setting {
                    width: 47px;
                    height: 47px;
                    background: url('img/lobby/ic_setting.svg') center no-repeat;
                }
            }

        }
    }

    .contents {
        display: flex;
        justify-content: center;
        height: 455px;

        > * {
            width: 415px;
        }

        .left {
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
                background: #4EDDBF;
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
                }
            }

            .rank {
                background: #42DCC1;
                padding: 9px;

                nav {
                    display: flex;
                    width: 280px;
                    height: 48px;
                    background: #2AB9A7;
                    border-radius: 24px;
                    margin: auto;
                    overflow: hidden;

                    button {
                        flex: 1;
                        font-weight: bold;
                        font-size: 22px;
                        color: #fff;
                        background: none;
                        border: none;
                        cursor: pointer;

                        &.active {
                            color: #ff77b5;
                            background: #fff;
                            border-radius: 24px;
                        }
                    }
                }
            }
        }

        .mode {
            background: #6BCDA7;
            border-radius: 30px;
            text-align: center;

            > {
                h1 {
                    font-size: 22px;
                    color: #fff;
                    margin: 65px 0 25px;
                }

                div {
                    width: 245px;
                    height: 185px;
                    background: #52AE90;
                    border-radius: 25px;
                    margin: auto auto 32px auto;
                    box-sizing: border-box;

                    i {
                        display: inline-block;
                        width: 123px;
                        height: 137px;
                        background: url('@/assets/img/lobby/ic_game_mode.svg') center no-repeat;
                        margin: 10px auto 0;
                    }

                    p {
                        font-weight: bold;
                        font-size: 13px;
                        color: #fff;
                        margin: 0;
                    }
                }

                a {
                    display: inline-block;
                    width: 242px;
                    height: 72px;
                    line-height: 72px;
                    font-weight: bold;
                    font-size: 30px;
                    text-decoration: none;
                    color: #fff;
                    background: url('@/assets/img/lobby/bg_start_btn.svg') center no-repeat;
                    border: 5px solid #B9E9DF;
                    border-radius: 45px;
                }
            }

        }
    }
</style>
