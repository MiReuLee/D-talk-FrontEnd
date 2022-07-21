<template>
    <article class="wrap">
        <section class="header">
            <router-link to="/" />
            <router-link class="home" to="/" />
        </section>
        <div class="contents">
            <!-- 조회 -->
            <section class="left">
                <input
                    v-model="findUserId"
                    @change="findUser"
                >
                <button
                    v-if="findUserInfo"
                    @click="friendRequest"
                >
                    <img alt="">
                    <span v-text="findUserInfo.nickname" />
                </button>
            </section>
            <section class="right">
                <nav>
                    <router-link :to="{ name: 'MyFriend' }">내 친구</router-link>
                    <router-link :to="{ name: 'RecommendFriend' }">추천 친구</router-link>
                    <router-link :to="{ name: 'FriendReceive' }">친구 요청</router-link>
                </nav>
                <suspense>
                    <router-view />
                </suspense>
            </section>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { findUser, friendRequest } from '@/util/api';

export default defineComponent({
    setup() {
        const findUserId = ref('');
        const findUserInfo: Ref<any> = ref(null);

        return {
            findUserId,
            findUserInfo,
            async findUser() {
                try {
                    findUserInfo.value = await findUser(findUserId.value);
                } catch {
                    findUserInfo.value = null;
                }
            },
            async friendRequest() {
                await friendRequest(findUserInfo.value?.idx);

                alert('친구신청을 완료했습니다.');
            }
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
            align-items: flex-end;
            justify-content: space-between;
            height: 50px;
            margin-bottom: 113px;

            a {
                display: inline-block;
                width: 50px;
                height: 100%;
                background: url('img/workspace/ic_back_green01.svg') center no-repeat;
                background-color: #DBFAF5;
                border-radius: 16px;

                &.home {
                    width: 145px;
                    height: 85px;
                    background: url('img/logo.svg');
                }
            }
        }

        .contents {
            display: flex;
            height: 455px;

            .left {
                width: 328px;
                border: 5px solid #4BD2B5;
                border-radius: 20px;
                padding: 12px;
                box-sizing: border-box;
                margin-right: 20px;

                input {
                    width: 100%;
                    height: 48px;
                    font-weight: bold;
                    font-size: 18px;
                    color: #fff;
                    background: #41C7AE;
                    border: none;
                    border-radius: 24px;
                    outline: none;
                    padding: 0 25px;
                    box-sizing: border-box;
                    margin-bottom: 12px;
                }

                button {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    background: #3CDAC1;
                    border-radius: 20px;
                    padding: 8px;
                    border: none;
                    cursor: pointer;

                    img {
                        width: 49px;
                        height: 49px;
                        border-radius: 16px;
                        margin-right: 16px;
                    }

                    span {
                        font-weight: bold;
                        font-size: 18px;
                        color: #047068;
                    }
                }
            }

            .right {
                display: flex;
                flex-direction: column;
                flex: 1;

                nav {
                    display: flex;
                    width: 100%;
                    margin-bottom: 6px;

                    a {
                        position: relative;
                        display: inline-block;
                        flex: 1;
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        font-weight: bold;
                        font-size: 22px;
                        color: #fff;
                        text-decoration: none;
                        background: #73E5BC;
                        border-top-left-radius: 20px;
                        border-top-right-radius: 20px;

                        &.router-link-exact-active {
                            background: #57CBAA;

                            &::after {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 6px;
                                left: 0;
                                bottom: -6px;
                                background: #57CBAA;
                            }
                        }
                    }

                    & + article {
                        flex: 1;
                        background: #57CBAA;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                }
            }
        }
    }
</style>
