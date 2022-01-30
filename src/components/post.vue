<template>
    <article class="space-y-6">
        <img v-if="featuredImage" :src="featuredImage" alt="">
        <h2 class="text-3xl font-extrabold">{{ postTitle }}</h2>
        <p class="text-base">{{ postShort }}</p>
        <div class="flex gap-x-3 items-center">
            <div>
                <img :src="author.photo" alt="">
            </div>
            <div class="text-base">
                <h3 class="text-[#f7a704]">{{ author.name }}</h3>
                <p class="">Reporter . <time datetime="2022-01-22" class="text-black font-semibold">{{ pubDate }}</time></p>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'post',
    props: {
        featuredImage: {
            type: String,
            default: ""
        },
        postTitle: {
            type: String,
            default: "",
        },
        postShort: {
            type: String,
            default: "",
        },
        author: {
            type: Object,
            default: {},
        },
        pubDate: {
            type: String,
            default: "",
        }
    },
})
</script>