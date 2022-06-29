<template>
    <article class="wrap">
        <section class="header">
            <router-link to="/" />
        </section>
        <section>
            <!-- 조회 -->
            <article>
                <input
                    v-model="findUserId"
                    @change="findUser"
                >
            </article>
        </section>
    </article>
    <!-- 조회 -->
    <!-- <article>
    </article> -->
    <!-- 내 친구, 추천 친구, 친구 요청 -->
    <!-- <article>
        <nav>
            <router-link to="/">내 친구</router-link>
            <router-link to="/">추천 친구</router-link>
            <router-link to="/">친구 요청</router-link>
        </nav>
        <router-view />
    </article> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { findUser } from '@/util/api';

export default defineComponent({
    setup() {
        const findUserId = ref('');

        return {
            findUserId,
            async findUser() {
                await findUser(findUserId.value);
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
            position: relative;
            height: 50px;
            margin-bottom: 30px;

            a {
                display: inline-block;
                width: 50px;
                height: 100%;
                background: url('img/workspace/ic_back_green01.svg') center no-repeat;
                background-color: #DBFAF5;
                border-radius: 16px;
            }
        }
    }

    nav {
        // width: 502px;

        a {
            display: inline-block;
            width: 175px;
            height: 60px;
            font-weight: bold;
            font-size: 22px;
            color: #fff;
            text-decoration: none;
            background: #73E5BC;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
    }
</style>
