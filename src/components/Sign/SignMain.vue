<template>
    <article>
        <section
            class="title"
            :class="{ right: ty === 1 }"
        >
            <img src="@/assets/img/logo.svg" alt="logo">
            <p v-if="ty === 0">아직 회원이 아니신가요? <button @click="ty = 1">회원가입 하기</button></p>
            <p v-else-if="ty === 1">이미 회원이신가요? <button @click="ty = 0">로그인 하기</button></p>
        </section>
        <section
            v-show="ty === 0"
            class="sign-in"
        >
            <h1>로그인</h1>
            <input
                v-model="id1"
                name="id"
                placeholder="아이디"
            >
            <div class="pw-wrap">
                <input
                    v-model="pw1"
                    name="pw"
                    placeholder="비밀번호"
                    :type="isShowPw1 ? 'text' : 'password'"
                >
                <button @click="isShowPw1 = !isShowPw1">show</button>
            </div>
            <label>
                <input type="checkbox">
                <span>아이디 저장</span>
            </label>
            <button class="confirm" @click="signIn">로그인</button>
        </section>
        <section
            v-show="ty === 1"
            class="sign-up"
        >
            <h1>회원가입</h1>
            <input
                v-model="id2"
                name="id"
                placeholder="아이디"
            >
            <div class="pw-wrap">
                <input
                    v-model="pw2"
                    name="pw"
                    placeholder="비밀번호"
                    :type="isShowPw2 ? 'text' : 'password'"
                >
                <button @click="isShowPw2 = !isShowPw2">show</button>
            </div>
            <input
                v-model="nickname"
                name="nickname"
                placeholder="닉네임"
            >
            <button class="confirm" @click="signUp">회원가입</button>
        </section>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { signUp, signIn } from '@/util/api';

export default defineComponent({
    setup() {
        const ty = ref(0);

        // 로그인 시 비밀번호 Show 여부
        const isShowPw1 = ref(false);
        const id1 = ref('');
        const pw1 = ref('');

        // 회원가입 시 비밀번호 Show 여부
        const isShowPw2 = ref(false);

        const id2 = ref('');
        const pw2 = ref('');
        const nickname = ref('');

        return {
            ty,
            isShowPw1,
            isShowPw2,
            id2,
            pw2,
            nickname,
            async signUp() {
                await signUp(id2.value, pw2.value, nickname.value);
            },
            async signIn() {
                await signIn(id1.value, pw1.value);
            }
        };
    }
});
</script>

<style lang="scss">
    article {
        display: flex;
        height: 395px;
        width: 800px;
        background: #97F3DD;
        border-radius: 50px;
        margin: 0 calc((100% - 700px) / 2);

        > section {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &.title {
                transition: transform .333s;
                background: #36CDAD;
                box-shadow: 0px -5px inset #20ac98;
                border-radius: 50px;
                color: #fff;
                z-index: 1;

                &.right {
                    transform: translateX(100%);
                }

                img {
                    width: 255px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 13px;
                    margin: 0;

                    button {
                        background: none;
                        color: inherit;
                        font-size: inherit;
                        border: none;
                        padding: 0;
                        cursor: pointer;
                    }
                }
            }

            &.sign-in, &.sign-up {
                h1 {
                    margin: 0 0 15px;
                    font-size: 30px;
                    color: #047068;
                }

                input {
                    width: 265px;
                    height: 48px;
                    font-size: 18px;
                    border: none;
                    border-radius: 15px;
                    padding: 0 10px;
                    box-sizing: border-box;
                    margin-top: 7px;

                    &::placeholder {
                        color: #aaa;
                    }

                    &[type='checkbox'] {
                        position: relative;
                        width: 20px;
                        height: 20px;
                        vertical-align: top;
                        background: #E8FCF8;
                        appearance: none;
                        border-radius: 8px;

                        &::after {
                            position: absolute;
                            left: calc(50% - 4.5px);
                            top: calc(50% - 5px);
                            width: 9px;
                            height: 10px;
                            background: url('@/assets/img/sign/ic_check.svg') center no-repeat;
                        }

                        &:checked::after {
                            content: '';
                        }

                        & + span {
                            color: #047068;
                            font-size: 12px;
                            margin-left: 5px;
                            vertical-align: sub;
                        }
                    }
                }

                .confirm {
                    width: 265px;
                    height: 63px;
                    background: url('@/assets/img/sign/bg_confirm.svg') center no-repeat;
                    background-size: contain;
                    border: 5px solid #D5FAF2;
                    border-radius: 32px;
                    margin-top: 20px;
                    cursor: pointer;
                    color: #fff;
                    font-size: 20px;
                }

                .pw-wrap {
                    position: relative;

                    button {
                        position: absolute;
                        right: 12px;
                        top: 50%;
                        transform: translateY(-50%);
                        background: none;
                        border: none;
                        padding: 0;
                        color: #aaa;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }

                label {
                    width: 265px;
                }
            }

            &.sign-in {
            }

            &.sign-up {
                transform: translateX(-100%);

                input[name='nickname'] {
                    background: #E7FCF9;
                }
            }
        }
    }
</style>
