<template>
    <!-- 조회 -->
    <article>
    </article>
    <!-- 내 친구, 추천 친구, 친구 요청 -->
    <article>
        <nav>
            <router-link v-text="$loacle.my_friedns" />
            <router-link v-text="$loacle.recommend_friedns" />
            <router-link v-text="$loacle.friedns_request" />
        </nav>
        <router-view />
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {}
});
</script>
