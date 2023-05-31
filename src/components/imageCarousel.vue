

<template>
    <div class="imageCarousel foreground rounded">
    <!--<div v-for="image of getImages()" v-bind:key="image">
                                <img class="image" :src="image" alt="">
                            </div>-->

        <div class="spinner-grow" role="status" v-if="loading" style="margin-top: 40vh;">
        </div>

        <div v-bind:key="images" v-show="targetNum === 1" class="imageContainer">
            <img class="image border border-dark rounded" :src="images.at(0)" alt="">
        </div>
        <div v-bind:key="images" v-show="targetNum === 2" class="imageContainer">
            <img class="image border border-dark rounded" :src="images.at(1)" alt="">
        </div>
        <div v-bind:key="images" v-show="targetNum === 3" class="imageContainer">
            <img class="image border border-dark rounded" :src="images.at(2)" alt="">
        </div>
        <div v-bind:key="images" v-show="targetNum === 4" class="imageContainer">
            <img class="image border border-dark rounded" :src="images.at(3)" alt="">
        </div>
        <div v-bind:key="images" v-show="targetNum === 5" class="imageContainer">
            <img class="image border border-dark rounded" :src="images.at(4)" alt="">
        </div>


        <div>{{ targetNum }}/{{ images.length }}</div>
        <div class="btn-group" role="group" aria-label="Image carousel controls">
            <button class="btn btn-secondary" @click="previousImage()"> &lt;&lt; </button>
            <button class="btn btn-primary" @click="nextImage()"> >></button>
        </div>

    </div>
</template>

<script>
import { getShownImages, getCultureObject } from '../utils/cities.js'
export default {
    data() {
        return {
            targetNum: 1,
            images: [],
            loading: "Loading . . ."
        }
    },
    methods: {
        async newCity() {
            this.loading = "Loading . . ."
            await getCultureObject();
            this.targetNum = 1
            this.images = getShownImages()
            console.log("images: " + this.images)
            this.loading = ""

        },
        nextImage() {
            if (this.targetNum < 5 && this.targetNum < this.images.length) {
                this.targetNum++
            }
        },
        previousImage() {
            if (this.targetNum > 1) {
                this.targetNum--
            }
        },
        setLastImage() {
            this.targetNum = this.images.length
        },
    }

}


</script>

<style scoped>
.imageCarousel {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.image {
    max-height: 67dvh;
    max-width: 120%;
    object-fit: contain;
}

.imageContainer {
    display: flex;
    justify-content: center;
    height: 68dvh;
    align-items: center;
    width: 80%;

}
</style>