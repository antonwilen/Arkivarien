<template>
    <div id="map" style="position: relative;" v-show="true">
        <svg id="Layer_1" class="sweden-map" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 226.24 552.9">
            <path class="cls-3"
                d="M77.69,548.87c-7.8,5.8-29.21-5.63-41.37-21.45C33.45,523.69,20,506.2,25.6,490.66c3.38-9.43,10.2-8.23,13.79-16.86,4.48-10.75-3.48-19-17.62-52.08A305.85,305.85,0,0,1,7.22,379.59C6,374.8.36,353.17,3.39,352s12,19.55,15.32,18.38c3.09-1.1-5.65-19-3.83-40.6,2.54-30.24,23-35.57,26-65.1,2.11-20.68-7.8-19.3-8.43-45.19-.79-33.26,15.44-40.9,15.32-75.07-.09-28.15-11.11-26.62-7.66-42.89C48.8,60.87,119.07,45.12,116,15.76c-.46-4.36-2.51-8.8,0-11.49,5.84-6.24,28.3,5.49,39.07,12.26,20,12.6,31.22,27.83,39.83,39.83,14.5,20.19,22.75,31.69,19.15,42.89-3.48,10.79-14.39,10.2-29.11,24.51-12,11.71-2.65,51.52-7.79,64.19-10.48,25.84-14,5.8-20.42,40.64C152.29,252.5,134,265,135.9,283.85c.66,6.47,1.59,17.34,9.19,26.81,7,8.75,13.19,8.16,27.58,20.68,8.46,7.36,15.92,13.85,14.55,19.91-1.67,7.39-15.1,8.19-15.32,14.55-.15,4.4,6.2,5.67,8.42,11.49,2.8,7.32-2,17.44-8.42,23-11.21,9.75-23.41,1.82-31.41,10-4.59,4.67-4,10.75-2.29,32.17,3.64,46.67,3.29,51,0,55.91-7,10.46-22.37,16.34-33.71,20.69-9,3.43-15.18,4.4-19.91,10.72C78.35,538,82.48,545.3,77.69,548.87Z" />
            <path class="cls-3"
                d="M152.75,515.32c-3-.69-3.62-16.47-1-29.55.6-3,.95-3.74,9.86-28,4.14-11.25,4.85-13.23,5.6-13.12,2.3.34,2.59,19.76-1.38,38.5C162.68,498.15,156.06,516.09,152.75,515.32Z" />
            <path class="cls-3"
                d="M187.61,483c-2.31-1.37-1.12-4.92-1.77-19.07-.57-12.38-1.58-11.52-1-15.52,1.41-9.46,8.08-21.38,17.29-23.2,4.73-.93,7.25,1.37,13-.78,5.2-2,7.62-5.55,8.46-4.91,1.06.8-3.12,6.32-6.29,14.93-3.26,8.85-1.66,10.63-5.31,22.41-2.1,6.77-3.15,10.18-5.9,14.15C200.89,478.5,191.54,485.3,187.61,483Z" />
            <path class="cls-4"
                d="M51.64,396.19A14.37,14.37,0,0,1,45.52,388c-1.45-4.55-1.34-11.4,2.55-14.81,1-.89,1.34-.72,9.7-3.58,6.23-2.13,6.71-2.45,7.15-3.06,2.78-3.83-2.77-9.06-.51-13.79,2.07-4.31,9.9-6.63,13.79-4.08,3.32,2.17,1.27,6.24,4.59,18.89,1.75,6.66,2.81,7.43,2,9.7-1.76,5.2-8.32,4.26-13.79,11.24-3.41,4.35-3.68,8.31-5.11,8.17-2.52-.25-3.3-12.83-4.08-12.77s1.25,11.49-3.07,13.79C56.38,399,52.91,396.94,51.64,396.19Z" />
            <path class="cls-4"
                d="M97.74,428.83c-1.25-.35-1.88-5.77-1.67-10.22.19-3.92,1.46-7.77,4-15.32s2.51-6.31,4-11.23c1.7-5.6,2-8,3-8.17,1.58-.32,4.21,4.55,4.34,9.7.17,7.1-4.6,7.39-7.35,18.9a69.35,69.35,0,0,1-3.67,12.25C98.75,428.69,98.09,428.92,97.74,428.83Z" />
        </svg>

        <yellowButton @click="submitGuess('Malmö')" id="y1" ref="Malmö" class="button malmo"
            v-if="checkIfCityIsOnList('Malmö')" />
        <greenButton ref="Malmö" class="button malmo" v-if="correctGuesses.includes('Malmö')" />
        <redButton class="button malmo" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Göteborg')" id="y2" ref="Göteborg" class="button goteborg"
            v-if="checkIfCityIsOnList('Göteborg')" />
        <greenButton ref="Göteborg" class="button goteborg" v-if="correctGuesses.includes('Göteborg')" />
        <redButton class="button goteborg" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Gotland')" id="y3" ref="Gotland" class="button gotland"
            v-if="checkIfCityIsOnList('Gotland')" />
        <greenButton ref="Gotland" class="button gotland" v-if="correctGuesses.includes('Gotland')" />
        <redButton class="button gotland" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Örebro')" id="y4" ref="Örebro" class="button orebro"
            v-if="checkIfCityIsOnList('Örebro')" />
        <greenButton ref="Örebro" class="button orebro" v-if="correctGuesses.includes('Örebro')" />
        <redButton class="button orebro" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Sundsvall')" id="y5" ref="Sundsvall" class="button sundsvall"
            v-if="checkIfCityIsOnList('Sundsvall')" />
        <greenButton ref="Sundsvall" class="button sundsvall" v-if="correctGuesses.includes('Sundsvall')" />
        <redButton class="button sundsvall" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Umeå')" id="y6" ref="Umeå" class="button umea"
            v-if="checkIfCityIsOnList('Umeå')" />
        <greenButton ref="Umeå" class="button umea" v-if="correctGuesses.includes('Umeå')" />
        <redButton class="button umea" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Kiruna')" id="y7" ref="Kiruna" class="button kiruna"
            v-if="checkIfCityIsOnList('Kiruna')" />
        <greenButton ref="Kiruna" class="button kiruna" v-if="correctGuesses.includes('Kiruna')" />
        <redButton class="button kiruna" style="z-index: 1;"/>

        <yellowButton @click="submitGuess('Stockholm')" id="y8" ref="Stockholm" class="button stockholm"
            v-if="checkIfCityIsOnList('Stockholm')" />
        <greenButton ref="Stockholm" class="button stockholm" v-if="correctGuesses.includes('Stockholm')" />
        <redButton class="button stockholm" style="z-index: 1;"/>
    </div>
</template>

<script>
import redButton from './redButton.vue';
import greenButton from './greenButton.vue'
import yellowButton from './yellowButton.vue'
import { getCities, getTargetCity } from '../utils/cities.js'

export default {
    name: 'swedenMap',
    data() {
        return {
            cityList: [],
            correctGuesses: []
        }
    },
    created() {
        this.updateCityList()
    },
    computed: {

    },
    methods: {
        submitGuess(city) {
            this.updateCorrectGuesses(city)
            this.$parent.submitGuess(city)
        },
        checkIfCityIsOnList(city) {
            return this.cityList.includes(city)
        },
        updateCityList() {
            console.log("updated:" + getCities())
            this.cityList.splice(0, this.cityList.length)
            const temp = getCities()
            for (let i = 0; i < temp.length; i++) {
                this.cityList.push(temp[i])
            }
            console.log("citylist: " + this.cityList)

            console.log("correctGuesses: " + this.correctGuesses)
        },
        updateCorrectGuesses(guessedCity) {
            let city = getTargetCity()
            let guess = guessedCity
            console.log("city: " + city)
            console.log("guess: " + guess)
            if (city === guess) {
                this.correctGuesses.push(city)
            }
        }
    },
    components: {
        redButton,
        yellowButton,
        greenButton
    }
}
</script>

<style scoped>
#map {}

.button {
    position: absolute;
    height: 20px;
    width: auto;

}

.cls-3 {
    fill: #662d91;
    stroke: #231f20;
    stroke-miterlimit: 10;
    stroke-width: 5px;
}

.cls-4 {
    fill: #9cd3f3;
}

.stockholm {
    left: 65%;
    bottom: 31%;
    z-index: 9;
}

.kiruna {
    left: 48%;
    bottom: 87%;
    z-index: 10;
}

.gotland {
    left: 82%;
    bottom: 18%;
    z-index: 2;
}

.orebro {
    left: 43%;
    bottom: 33%;
    z-index: 10;
}

.sundsvall {
    left: 50%;
    bottom: 51%;
    z-index: 10;
}

.umea {
    left: 66%;
    bottom: 64%;
    z-index: 10;
}

.goteborg {
    left: 9%;
    bottom: 21%;
    z-index: 2;
}

.malmo {
    left: 14%;
    bottom: 4%;
    z-index: 2;
}
</style>