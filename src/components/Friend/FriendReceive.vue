<template>
    <article>
        <div
            v-for="r in friendReceive"
            :key="r.idx"
        >
            <div>
                <img alt="">
                <span v-text="r.nickname" />
            </div>
            <button
                v-if="!r.isFriend"
                @click="friendAccept(r)"
            ><span>친구 추가</span></button>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { getFriendReceive, friendAccept } from '@/util/api';

export default defineComponent({
    async setup() {
        const friendReceive: Ref<any> = ref(await getFriendReceive());

        return {
            friendReceive,
            async friendAccept(r: any) {
                await friendAccept(r.idx);

                friendReceive.value = ref(await getFriendReceive());

                // Object.assign(r, { isFriend: true });
            }
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
