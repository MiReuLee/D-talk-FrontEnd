<template>
    <article class="wrap">
        <div class="header">
            <router-link to="/" />
            <input placeholder="단어">
        </div>
        <canvas
            ref="canvas"
            width="850"
            height="455"
            @mousedown="drawStart"
            @mousemove="draw"
        />
        <div class="footer">
            <button>브러쉬</button>
            <button>붓글씨</button>
            <button>수채화</button>
            <button>마커</button>
        </div>
    </article>
</template>

<script lang="ts">
import {
    defineComponent, onMounted, onUnmounted, Ref, ref
} from 'vue';

export default defineComponent({
    setup() {
        const canvas: Ref<HTMLCanvasElement | null> = ref(null);
        let ctx: CanvasRenderingContext2D | null;
        let isCanvasFocus = false;

        const drawEnd = () => { isCanvasFocus = false; };

        onMounted(() => {
            if (canvas.value) {
                ctx = canvas.value.getContext('2d');
            }

            window.addEventListener('mouseup', drawEnd);
        });

        onUnmounted(() => {
            window.removeEventListener('mouseup', drawEnd);
        });

        let test = false;
        const getRand = (
            min: number,
            max: number
        ) => Math.floor(Math.random() * (max - min + 1)) + min;

        let startX = 0;
        let startY = 0;

        return {
            canvas,
            drawStart(evt: MouseEvent) {
                if (ctx) {
                    isCanvasFocus = true;

                    startX = evt.offsetX;
                    startY = evt.offsetY;

                    ctx.beginPath();
                    ctx.moveTo(startX, startY);

                    ctx.lineCap = 'round';
                    // ctx.lineCap = 'square';
                    ctx.lineWidth = 25;
                    ctx.globalAlpha = 0.5;
                    // ctx.globalCompositeOperation = 'lighter';
                    // ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';

                    ctx.lineTo(startX, startY);
                    ctx.stroke();
                }
            },
            draw(evt: MouseEvent) {
                if (isCanvasFocus && ctx) {
                    const currX = evt.offsetX;
                    const currY = evt.offsetY;

                    // ctx.lineWidth = 10;

                    // ctx.lineWidth /= Math.max(Math.min(
                    //     Math.abs(currX - startX),
                    //     Math.abs(currY - startY)
                    // ) / 100, 1);

                    // console.log(Math.min(Math.abs(currX - startX), Math.abs(currY - startY)));
                    // console.log(ctx.lineWidth);

                    ctx.beginPath();
                    ctx.lineTo(currX, currY);
                    ctx.stroke();
                }
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
        }

        .footer {

        }
    }
</style>
