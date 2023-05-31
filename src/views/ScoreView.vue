<template>
    <div id="main-layout" class="background">
        <div class="container">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-12 col-md-8 main-box foreground">
                    <div class="star-array">
                        <img v-for="item in score" :key="item" src="src/assets/star.png" alt="" class="point-star">
                    </div>
                    <div id="scoreboard">
                        Poäng: {{ score }}
                    </div>
                    <button class="btn btn-primary" @click="newGame()">SPELA IGEN</button>
                </div>
                <div class="col-md-2"></div>
            </div>


        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            score: parseInt(this.$route.params.score)
        }
    },
    methods: {
        newGame() {
            console.log("new game")
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style scoped>
#main-layout {
    height: 100vh;
}

.point-star {
    width: 4rem;
    margin: 12px;
}



.main-box {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 20px;
    border: #86763f solid 2px;
}

#scoreboard {
    background-color: #c9ae58;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 20px;
    border: #86763f solid 2px;
}
</style>