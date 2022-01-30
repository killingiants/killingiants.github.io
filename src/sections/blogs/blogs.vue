<template>
    <main>
        <ul class="mt-14 grid grid-cols-3 gap-x-10 gap-y-20 px-10">
            <li v-for="post in posts" :key="post.id">
                <post :featuredImage="post.featuredImage" :postTitle="post.title" :postShort="post.short" :author="post.author" :pubDate="post.pubdate"></post>
            </li> 
        </ul>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent ({
    data: function () {
        return {
            posts: [{
                'id': 1,
                'featuredImage': '',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
                {
                'id': 2,
                'featuredImage': '/src/assets/images/blogs/article_featured_image.jpg',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
                {
                'id': 3,
                'featuredImage': '',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
                {
                'id': 4,
                'featuredImage': '',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
                {
                'id': 5,
                'featuredImage': '',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
                {
                'id': 6,
                'featuredImage': '/src/assets/images/blogs/article_featured_image.jpg',
                'title': 'Microsoft to buy Activision Blizzard for $68.7 billion',
                'short': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                'author': {
                    'name': 'John Doe',
                    'photo': '/src/assets/images/blogs/article-author.jpg'
                },
                'pubdate': '22-01-2022',
                },
            ]
        };
    }
});

</script>