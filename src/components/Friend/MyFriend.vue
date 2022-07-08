<template>
    <article>
        <div
            v-for="f in friendArr"
            :key="f.idx"
        >
            <div>
                <img alt="">
                <span v-text="f.nickname" />
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getFriend } from '@/util/api';

export default defineComponent({
    async setup() {
        const friendArr = await getFriend();

        return {
            friendArr
        };
    }
});
</script>

<style lang="scss" scoped>
    article {
        padding: 30px 20px;

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 109px;
            background: #cdede1;
            border-radius: 25px;
            padding: 0 14px;

            > div {
                display: flex;
                align-items: center;

                img {
                    width: 85px;
                    height: 85px;
                    background: #fff;
                    border-radius: 20px;
                    margin-right: 15px;
                }

                span {
                    font-weight: bold;
                    font-size: 20px;
                    color: #047068;
                }
            }

            button {
                position: relative;
                width: 149px;
                height: 52px;
                background: rgba(255, 255, 255, 0.6);
                border: none;
                border-radius: 25px;
                cursor: pointer;

                &::before {
                    content: '';
                    position: absolute;
                    width: 139px;
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
            }
        }
    }
</style>
