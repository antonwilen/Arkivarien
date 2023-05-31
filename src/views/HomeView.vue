
<template>
    <main>


        <div class="background">
            <div class="container">
                <div class="row title-bar rounded">
                    <div class="col">
                        <div class="score-text">STAD {{ guessCount }} AV 5</div>
                    </div>
                    <div class="col">
                        <div class="star-array d-none d-sm-block">
                            <img v-for="item in guessPoints" :key="item" src="src/assets/star.png" alt=""
                                class="point-star">
                        </div>
                        <div class="score-text d-block d-sm-none"> {{ guessPoints }}</div>
                    </div>
                    <div class="col">
                        <div class="score-text">Totalt: {{ score }}</div>
                    </div>


                </div>
                <div class="row">
                    
                    <div class="col-8 col-sm-2 center">
                        <div>
                            <div>
                                <swedenMap ref="map" />
                            </div>

                            <button @click="mount" class="btn btn-warning" style="margin-top: 5vh;">Ny bild från
                                arkivet</button>
                        </div>
                    </div>
                    

                    <div class="col-12 col-sm-10">
                        <imageCarousel ref="carousel"></imageCarousel>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<script>
import { getCities, getTargetCity, mountImage, nextGuess, resetCities } from "../utils/cities.js"
import imageCarousel from "../components/imageCarousel.vue"
import swedenMap from "../components/map.vue"

export default {
    data() {
        return {
            guess: "",
            guessCount: 1,
            guessPoints: 5,
            score: 0,
            response: "",
        };
    },
    components: {
        imageCarousel,
        swedenMap
    },
    beforeMount() {
        this.initialize()
    },
    //carousel cannot be initialized before mounting
    mounted() {
        this.$refs.carousel.newCity()
    },
    methods: {
        initialize() {
            resetCities()
            this.guess = ""
            this.guessCount = 1
            this.guessPoints = 5
            this.score = 0
            this.response = ""
        },
        mount() {
            if (this.guessPoints > 1) {
                this.guessPoints--;
                mountImage();
                this.changeToLastImage();
            }
        },
        changeToLastImage() {
            this.$refs.carousel.setLastImage();
        },
        getCityList() {
            return getCities();
        },
        submitGuess(city) {
            this.$emit("guess", city);

            this.checkGuess(city)

            //check guess-count
            this.guessCount++;

            //after 5 guesses the game-round is over
            if (this.guessCount >= 6) {
                this.changeToScoreView()
                
                //endGame()
                //Visa poäng
            }

            //load new city when guessed
            else {
                nextGuess();
                this.$refs.carousel.newCity()
                this.guessPoints = 5;
            }
            this.$refs.map.updateCityList()
        },
        checkGuess(guess) {
            //if user submits empty guess
            if (guess === "") {
                this.response = "Ni måste fylla i en stad att gissa på!";
                return;
            }
            //if user submits correct/false guess
            if (guess === getTargetCity()) {
                this.score += this.guessPoints;
                //this.guessCount = 0
                this.response = "Rätt svar!";
            }
            else {
                this.response = "Fel svar! Rätt svar var " + getTargetCity();
            }
        },
        getGuess(){
            return this.guess
        },
        
        changeToScoreView() {
            setTimeout(this.$router.push({ name: 'score', params: { score: this.score } }), 1000)
        }
    },


}
</script>

<style scoped>
.title-bar {
    background-color: #e2d485;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    max-height: 12vh;
    margin-top: 10px;
}

.point-star {
    width: 3rem;
    margin: 5px;
}

@media (max-width: 576px) {
    .center {
        margin-left: 17%;
    }
}
</style>