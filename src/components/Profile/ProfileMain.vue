<template>
    <article class="wrap">
        <section class="header">
            <router-link to="/" />
            <router-link class="home" to="/" />
        </section>
        <article class="contents">
            <section class="left">
                <img alt="">
                <p>석성희</p>
                <nav>
                    <router-link :to="{ name: 'MyInfo' }">내 정보</router-link>
                    <router-link :to="{ name: 'Gallery' }">갤러리</router-link>
                    <router-link :to="{ name: 'Option' }">옵션</router-link>
                </nav>
            </section>
            <section class="right">
                <router-view />
            </section>
        </article>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
            margin-bottom: 28px;

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
            align-items: center;
            height: 540px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            padding-left: 36px;

            .left {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 189px;
                margin-right: 37px;

                img {
                    width: 112px;
                    height: 112px;
                    border-radius: 20px;
                    background: #fff;
                }

                p {
                    font-weight: bold;
                    font-size: 22px;
                    color: #fff;
                    margin: 10px 0 30px;
                }

                nav {
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    a {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        height: 53px;
                        font-weight: bold;
                        font-size: 22px;
                        color: #047068;
                        text-decoration: none;
                        background: #A3F7BF;
                        border-radius: 26px;
                        margin-bottom: 5px;

                        &.router-link-exact-active {
                            color: #fa26a0;
                            background: #fff;
                        }
                    }
                }
            }

            .right {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 551px;
                height: 465px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 30px;
            }
        }
    }
</style>
