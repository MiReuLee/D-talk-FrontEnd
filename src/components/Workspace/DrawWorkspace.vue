<template>
    <article class="wrap">
        <div class="header">
            <router-link to="/" />
            <input
                v-model="keyword"
                placeholder="단어"
            >
        </div>
        <canvas
            ref="canvas"
            width="850"
            height="455"
            @mousedown="drawStart"
            @mousemove="draw"
        />
        <div class="footer">
            <button
                :class="{ active: penTy === 0 }"
                @click="setPen(0)"
            />
            <button
                :class="{ active: penTy === 1 }"
                @click="setPen(1)"
            />
            <button
                :class="{ active: penTy === 2 }"
                @click="setPen(2)"
            />
            <button
                :class="{ active: penTy === 3 }"
                @click="setPen(3)"
            />
            <button
                :class="{ active: penTy === 4 }"
                @click="setPen(4)"
            />
            <div>
                <div>
                    <button />
                    <div>
                        <button
                            v-for="(c, i) in colorArr"
                            :key="i"
                            :style="{ background: `rgb(${c.join()})` }"
                            @click="setColor(i)"
                        />
                    </div>
                </div>
                <div>
                    <button />
                </div>
            </div>
            <button
                class="send"
                @click="submit"
            >보내기</button>
        </div>
    </article>
    <suspense>
        <friend-modal
            v-if="isShowFriendModal"
            :quiz-idx="quizIdx"
        />
    </suspense>
</template>

<script lang="ts">
import { saveQuiz } from '@/util/api';
import {
    defineComponent, onMounted, onUnmounted, Ref, ref
} from 'vue';
import FriendModal from './FriendModal.vue';

const { createjs } = window as any;

export default defineComponent({
    components: {
        FriendModal
    },
    setup() {
        const colorArr = [
            [0, 0, 0],
            [127, 127, 127],
            [136, 0, 21],
            [237, 28, 37],
            [255, 127, 39],
            [255, 243, 2],
            [34, 177, 76],
            [4, 161, 232],
            [63, 72, 203],
            [163, 73, 164]
        ];
        let color = colorArr[0];

        let stage: any;
        let shape: any;

        const canvas: Ref<HTMLCanvasElement | null> = ref(null);
        let isCanvasFocus = false;

        const penTy = ref(0);

        const drawEnd = () => { isCanvasFocus = false; };

        onMounted(() => {
            if (canvas.value) {
                stage = new createjs.Stage(canvas.value);
            }

            window.addEventListener('mouseup', drawEnd);
        });

        onUnmounted(() => {
            window.removeEventListener('mouseup', drawEnd);
        });

        const getRand = (
            min: number,
            max: number
        ) => Math.floor(Math.random() * (max - min + 1)) + min;

        let startX = 0;
        let startY = 0;

        const drawStartTime = new Date().getTime();

        const keyword = ref('');

        // eslint-disable-next-line max-len
        const drawData: { x: number; y: number; pen: number; color: number[]; time: number; }[] = [];

        const isShowFriendModal = ref(false);
        const quizIdx = ref(0);

        return {
            keyword,
            canvas,
            penTy,
            colorArr,
            setColor(idx: number) {
                color = colorArr[idx];
            },
            setPen(pen: number) {
                penTy.value = pen;
            },
            drawStart(evt: MouseEvent) {
                startX = evt.offsetX;
                startY = evt.offsetY;

                shape = new createjs.Shape();
                stage.addChild(shape);

                switch (penTy.value) {
                    case 0: {
                        shape.graphics
                            .beginStroke(`rgb(${color.join()})`);
                        break;
                    }
                    case 1: {
                        shape.graphics
                            .setStrokeStyle(10)
                            .beginStroke(`rgb(${color.join()})`);
                        break;
                    }
                    case 2: {
                        shape.graphics
                            .beginStroke(`rgb(${color.join()})`);
                        break;
                    }
                    case 3: {
                        shape.graphics
                            .setStrokeStyle(25, 'round')
                            .beginStroke(`rgba(${color.join()}, 0.5)`);
                        break;
                    }
                    case 4: {
                        shape.graphics
                            .setStrokeStyle(20)
                            .beginStroke('#fff');
                        break;
                    }
                    default:
                }

                shape.graphics
                    .moveTo(startX, startY)
                    .lineTo(startX, startY);

                stage.update();

                isCanvasFocus = true;
            },
            draw(evt: MouseEvent) {
                if (isCanvasFocus) {
                    const currX = evt.offsetX;
                    const currY = evt.offsetY;

                    // let lineWidth = 10;

                    // lineWidth /= Math.max(Math.min(
                    //     Math.abs(currX - startX),
                    //     Math.abs(currY - startY)
                    // ) / 100, 1);

                    shape.graphics
                        .lineTo(currX, currY);

                    stage.update();

                    drawData.push({
                        x: currX,
                        y: currY,
                        pen: penTy.value,
                        color,
                        time: new Date().getTime() - drawStartTime
                    });
                }
            },
            isShowFriendModal,
            quizIdx,
            async submit() {
                quizIdx.value = Number(await saveQuiz({
                    keyword: keyword.value,
                    thumbImg: '',
                    detail: JSON.stringify(drawData),
                    sec: 10
                }));

                isShowFriendModal.value = true;
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

            input {
                position: absolute;
                left: calc(50% - 195px / 2);
                width: 195px;
                height: 100%;
                text-align: center;
                font-weight: bold;
                font-size: 22px;
                background: #DBFAF5;
                border-radius: 15px;
                border: none;
                outline: none;

                &::placeholder {
                    color: #7a7a7a;
                }
            }
        }

        canvas {
            background: #fff;
            border-radius: 30px;
            margin-bottom: 10px;
        }

        .footer {
            display: flex;

            > button {
                position: relative;
                width: 72px;
                height: 72px;
                background-color: #2DBBA7;
                background-size: 50px 50px;
                background-position: center;
                background-repeat: no-repeat;
                border: 9px solid #35D0BA;
                border-radius: 20px;
                margin-right: 5px;
                vertical-align: middle;

                &.active {
                    &::after {
                        content: '';
                        position: absolute;
                        width: 80px;
                        height: 80px;
                        left: -13px;
                        top: -13px;
                        border: 8px solid #D5FAF7;
                        border-radius: 20px;
                        box-sizing: border-box;
                    }
                }

                &:nth-child(1) {
                    background-image: url('img/workspace/ic_pen01.svg');
                }

                &:nth-child(2) {
                    background-image: url('img/workspace/ic_pen02.svg');
                }

                &:nth-child(3) {
                    display: none;
                    background-image: url('img/workspace/ic_pen03.svg');
                }

                &:nth-child(4) {
                    background-image: url('img/workspace/ic_pen04.svg');
                }

                &:nth-child(5) {
                    background-image: url('img/workspace/ic_eraser.svg');
                }
            }

            > div {
                display: inline-flex;
                align-items: center;
                height: 72px;
                background-color: #35D0BA;
                border-radius: 20px;
                vertical-align: middle;
                box-sizing: border-box;
                padding: 9px;
                margin-right: 5px;

                > div {
                    height: 100%;
                    background: #2DBBA7;
                    border-radius: 20px;
                    margin-right: 5px;

                    &:first-child {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        padding: 0 10px;

                        > {
                            button {
                                width: 52px;
                                height: 42px;
                                background: url('img/workspace/ic_palette.svg') center no-repeat;
                                border: none;
                                margin-right: 12px;
                            }
                        }
                    }

                    &:last-child {
                        padding: 7px 6px;
                        box-sizing: border-box;

                        button {
                            width: 20px;
                            height: 100%;
                            background: #86D5C2;
                            border: none;
                            margin: 0;
                        }
                    }
                }

                > div {
                    button {
                        width: 20px;
                        height: 20px;
                        border: 2px solid #000;
                        border-radius: 3px;
                        margin-right: 3px;
                    }
                }
            }

            .send {
                flex: 1;
                font-weight: bold;
                font-size: 22px;
                color: #fff;
                background-image: linear-gradient(to bottom, #ffa8a8 0%, #ff77b5 100%);
                background-size: contain;
                border: 4px solid #BFF7EB;
                cursor: pointer;
                margin-right: 0;
            }
        }
    }
</style>
