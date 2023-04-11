<template>
    <div class="mainpage">
        <link
            href="https://fonts.googleapis.com/css2?family=Alegreya&family=Alfa+Slab+One&family=Lato:wght@300&family=Righteous&family=Russo+One&family=Tenali+Ramakrishna&display=swap"
            rel="stylesheet">
        <div class="align">

            <div class="space">
            </div>
            <router-link to="/seconde" class="text">StarWars choisis ton camp </router-link>
            <router-view />
            <a href="#"> </a>
            <div ref="box" class="box"></div>

        </div>

        <div class="perspective">
            <div class="crawl">
                <p>Episode LVII<strong> Hopeless minds</strong></p>
                <p>Republique, Empire deux noms très représentatifs et essentiels de l'univers star wars, deux forces ennemies et pourtant si similaires se livrent bataille depuis les temps
                  anciens... toute la galaxie est touchée par ce conflit mais à terme ces deux faction ne causeront elles pas la fin de notre cosmos tel que le l'on connait ?</p>
                <p>C'est la guerre ! La République croule sous les attaques de l'impitoyable Sith, le Comte Dooku. Il y a
                    des héros dans les deux camps. Le Mal est partout.</p>
                <p>Avec une audace stupéfiante, le Général Grievous, diabolique chef droïde, est entré dans la capitale pour
                    enlever le Chancelier Palpatine, Chef Suprême du Sénat Galactique.</p>
                <p>Alors que l'Armée Séparatiste Droïde tente de quitter la capitale assiégée avec son précieux otage, deux
                    Chevaliers Jedi mènent une mission désespérée pour secourir le Chancelier captif...</p>
                <p>Au cours de la bataille, des espions rebelles ont réussi à dérober les plans secrets de l'arme absolue de
                    l'Empire : l'Etoile de la Mort, une station spatiale blindée dotée d'un équipement assez puissant pour
                    annihiler une planète tout entière. Poursuivie par des sbires sinistres de l'Empire, la princesse Leia
                    file vers sa base dans son vaisseau cosmique, porteuse des plans volés à l'ennemi qui pourront sauver
                    son peuple et restaurer la liberté dans la galaxie...</p>
                <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the
                    stolen plans that can save her people and restore freedom to the galaxy...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
export default {
    name: 'HelloWorld',
    props: {
    },
    mounted() {
        gsap.to($('.crawl'), {
            duration: 120, css: { top: -5500 }, ease: "none"
        })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    text-align: center;

    background-color: black;
    color: rgb(252, 223, 43);
}

.mainpage {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

}

.text {
    /*color:rgb(252,223,43);*/
    color: white;
    font-size: 40px;
    text-decoration: none;
    position: absolute;
    top: 17%;
    left: 50%;
    transform: translate(-50%, -50%) translateY(-50%);
}

.space {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: -42vw -4vh 0px 0px #fff, 25vw -41vh 0px 0px #fff, -20vw 49vh 0px 1px #fff, 5vw 40vh 1px 1px #fff, 29vw 19vh 1px 0px #fff, -44vw -13vh 0px 0px #fff, 46vw 41vh 0px 1px #fff, -3vw -45vh 0px 1px #fff, 47vw 35vh 1px 0px #fff, 12vw -8vh 1px 0px #fff, -34vw 48vh 1px 1px #fff, 32vw 26vh 1px 1px #fff, 32vw -41vh 1px 1px #fff, 0vw 37vh 1px 1px #fff, 34vw -26vh 1px 0px #fff, -14vw -49vh 1px 0px #fff, -12vw 45vh 0px 1px #fff, -44vw -33vh 0px 1px #fff, -13vw 41vh 0px 0px #fff, -36vw -11vh 0px 1px #fff, -23vw -24vh 1px 0px #fff, -38vw -27vh 0px 1px #fff, 16vw -19vh 0px 0px #fff, 28vw 33vh 1px 0px #fff, -49vw -4vh 0px 0px #fff, 16vw 32vh 0px 1px #fff, 36vw -18vh 1px 0px #fff, -25vw -30vh 1px 0px #fff, -23vw 24vh 0px 1px #fff, -2vw -35vh 1px 1px #fff, -25vw 9vh 0px 0px #fff, -15vw -34vh 0px 0px #fff, -8vw -19vh 1px 0px #fff, -20vw -20vh 1px 1px #fff, 42vw 50vh 0px 1px #fff, -32vw 10vh 1px 0px #fff, -23vw -17vh 0px 0px #fff, 44vw 15vh 1px 0px #fff, -40vw 33vh 1px 1px #fff, -43vw 8vh 0px 0px #fff, -48vw -15vh 1px 1px #fff, -24vw 17vh 0px 0px #fff, -31vw 50vh 1px 0px #fff, 36vw -38vh 0px 1px #fff, -7vw 48vh 0px 0px #fff, 15vw -32vh 0px 0px #fff, 29vw -41vh 0px 0px #fff, 2vw 37vh 1px 0px #fff, 7vw -40vh 1px 1px #fff, 15vw 18vh 0px 0px #fff, 25vw -13vh 1px 1px #fff, -46vw -12vh 1px 1px #fff, -18vw 22vh 0px 0px #fff, 23vw -9vh 1px 0px #fff, 50vw 12vh 0px 1px #fff, 45vw 2vh 0px 0px #fff, 14vw -48vh 1px 0px #fff, 23vw 43vh 0px 1px #fff, -40vw 16vh 1px 1px #fff, 20vw -31vh 0px 1px #fff, -17vw 44vh 1px 1px #fff, 18vw -45vh 0px 0px #fff, 33vw -6vh 0px 0px #fff, 0vw 7vh 0px 1px #fff, -10vw -18vh 0px 1px #fff, -19vw 5vh 1px 0px #fff, 1vw 42vh 0px 0px #fff, 22vw 48vh 0px 1px #fff, 39vw -8vh 1px 1px #fff, -6vw -42vh 1px 0px #fff, -47vw 34vh 0px 0px #fff, -46vw 19vh 0px 1px #fff, -12vw -32vh 0px 0px #fff, -45vw -38vh 0px 1px #fff, -28vw 18vh 1px 0px #fff, -38vw -46vh 1px 1px #fff, 49vw -6vh 1px 1px #fff, -28vw 18vh 1px 1px #fff, 10vw -24vh 0px 1px #fff, -5vw -11vh 1px 1px #fff, 33vw -8vh 1px 0px #fff, -16vw 17vh 0px 0px #fff, 18vw 27vh 0px 1px #fff, -8vw -10vh 1px 1px #fff;


    box-shadow: 24vw 9vh 1px 0px #fff, 12vw -24vh 0px 1px #fff, -45vw -22vh 0px 0px #fff, -37vw -40vh 0px 1px #fff, 29vw 19vh 0px 1px #fff, 4vw -8vh 0px 1px #fff, -5vw 21vh 1px 1px #fff, -27vw 26vh 1px 1px #fff, -47vw -3vh 1px 1px #fff, -28vw -30vh 0px 1px #fff, -43vw -27vh 0px 1px #fff, 4vw 22vh 1px 1px #fff, 36vw 23vh 0px 0px #fff, -21vw 24vh 1px 1px #fff, -16vw 2vh 1px 0px #fff, -16vw -6vh 0px 0px #fff, 5vw 26vh 0px 0px #fff, -34vw 41vh 0px 0px #fff, 1vw 42vh 1px 1px #fff, 11vw -13vh 1px 1px #fff, 48vw -8vh 1px 0px #fff, 22vw -15vh 0px 0px #fff, 45vw 49vh 0px 0px #fff, 43vw -27vh 1px 1px #fff, 20vw -2vh 0px 0px #fff, 8vw 22vh 0px 1px #fff, 39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff, -40vw 45vh 0px 1px #fff, 11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff, 45vw -29vh 0px 1px #fff, -2vw 18vh 0px 0px #fff, -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff, 42vw 24vh 0px 0px #fff, 45vw -48vh 1px 0px #fff, -36vw -18vh 0px 0px #fff, -44vw 13vh 0px 1px #fff, 36vw 16vh 0px 1px #fff, 40vw 24vh 0px 0px #fff, 18vw 11vh 0px 0px #fff, -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff, 27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff, -15vw -28vh 0px 0px #fff, -43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff, 47vw 5vh 0px 0px #fff, -45vw 15vh 1px 1px #fff, -5vw -28vh 0px 1px #fff, 38vw 25vh 1px 1px #fff, -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff, 49vw 13vh 0px 0px #fff, 48vw 10vh 0px 1px #fff, 19vw -28vh 0px 0px #fff, 4vw 7vh 0px 0px #fff, 21vw 21vh 1px 1px #fff, -15vw -15vh 0px 1px #fff, -6vw -42vh 1px 0px #fff, -15vw 48vh 1px 1px #fff, -23vw 25vh 1px 1px #fff, -48vw 25vh 0px 1px #fff, -31vw -19vh 0px 1px #fff, 4vw 37vh 1px 1px #fff, -43vw 28vh 0px 0px #fff, 3vw -25vh 0px 1px #fff, -39vw 14vh 0px 1px #fff, -40vw 31vh 0px 1px #fff, 35vw -36vh 1px 1px #fff, 16vw 49vh 0px 0px #fff, 6vw 39vh 0px 0px #fff, 3vw -35vh 0px 1px #fff, -44vw -2vh 1px 0px #fff, -6vw 21vh 1px 0px #fff, 48vw 9vh 1px 1px #fff, -43vw 30vh 1px 1px #fff, 29vw -12vh 1px 1px #fff, -48vw 13vh 1px 0px #fff, -42vw 32vh 1px 1px #fff, 34vw 15vh 1px 1px #fff, 29vw -37vh 1px 1px #fff, 28vw 2vh 0px 0px #fff;
    animation: zoom 16s alternate infinite;
}

@keyframes zoom {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.7);
    }
}

.imageback {
    width: 100%;
    height: 100%;
}

.perspective {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    height: 700px;
    overflow: visible;
    -webkit-transform: perspective(500) rotateX(45deg);
    -webkit-transform-style: preserve-3d;
    -moz-perspective: 300px;
    -moz-transform: perspective(300) rotateX(45deg);
    -moz-transform-style: preserve-3d;

    overflow: hidden;
}

.crawl {
    padding-top: 0px;
    position: absolute;
    z-index: 20;
    top: 430px;
    font-size: 60px;
}</style>
