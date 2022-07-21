<template>
    <div class="row">
        <div>음악</div>
        <i />
        <input type="range">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        align-items: center;
        font-size: 22px;
        color: #047068;

        div {
            margin-right: 15px;
        }

        i {
            width: 50px;
            height: 38px;
            background: url('img/profile/ic_sound.svg') center no-repeat;
            background-size: contain;
            margin-right: 20px;
        }

        input {
            width: 345px;
            appearance: none;

            &::-webkit-slider-runnable-track {
                height: 6px;
                background: #C7DED8;
                border: none;
                border-radius: 5px;
            }

            &::-webkit-slider-thumb {
                appearance: none;
                height: 19px;
                width: 19px;
                background: #047068;
                border: 3px solid #fff;
                border-radius: 50%;
                margin-top: -5px;
            }
        }
    }
</style>
