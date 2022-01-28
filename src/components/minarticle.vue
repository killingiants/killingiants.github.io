<template>
    <article class="space-y-6">
        <img :src="featuredImageUri" alt="">./../../assets/images/blogs/article_featured_image.jpg
        <h2 class="text-4xl font-extrabold">{{ articleTitle }}</h2>
        <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div class="flex gap-x-3 items-center">
            <div>
                <img src="./../../assets/images/blogs/article-author.jpg" alt="">
            </div>
            <div class="text-base">
                <h3 class="text-[#f7a704]">{{ author }}</h3>
                <p class="">Reporter . <time datetime="2022-01-22" class="text-black font-semibold">{{ pubDate }}</time></p>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'MinArticle',
    props: {
        hasFeaturedImage: {
            type: Boolean,
            default: false,
        },
        featuredImageUri: {
            type: String,
            default: ""
        },
        articleTitle: {
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