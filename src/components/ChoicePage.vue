<template>
   <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="#">Star Wars</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">A</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">B</a>
      </li>
    </ul>
    <span class="navbar-text">
     T
    </span>
  </div>
</nav>
    <div class="mainpage">
        <div class="align">
            <div class="box" id="resistance">
                <i></i>

              La République galactique est un gouvernement démocratique qui a précédé l'Empire dans l'univers de Star Wars. Elle était dirigée par un Sénat composé de représentants de chaque système stellaire, avec un Chancelier élu pour diriger l'ensemble de la galaxie.

              La République était fondée sur les principes de la paix, de la justice et de la liberté, mais elle était souvent rongée par la corruption et les conflits internes.
            </div>

            <div class="box" id="empire">
               <i></i>
              L'Empire dans Star Wars est une dictature galactique dirigée par l'Empereur Palpatine, également connu sous le nom de Dark Sidious. L'Empire est né des cendres de la République galactique, après que Palpatine ait manipulé les événements politiques pour devenir le dirigeant suprême.

              L'Empire a été construit sur une idéologie de domination impitoyable, de contrôle absolu et de répression de toute opposition.
            </div>
            <div class="space">
              
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
    name: 'ChoicePage',
    props: {
    },
    mounted() {
       
       gsap.utils.toArray('#resistance').forEach(div => {
        let hover = gsap.to(div, {scale: 1.55, color:"red", opacity:1, backgroundColor: "blue",duration:2.5, paused:true, ease: "power1.inOut"});
        div.addEventListener("mouseenter", () => hover.play());
        div.addEventListener("mouseleave", () => hover.reverse());
       })
       gsap.utils.toArray('#empire').forEach(div => {
        let hover = gsap.to(div, {scale: 1.55, color:"blue", opacity:1,backgroundColor: "red",duration:2.5, paused:true, ease: "power1.inOut"});
        div.addEventListener("mouseenter", () => hover.play());
        div.addEventListener("mouseleave", () => hover.reverse());
       })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    text-align: center;

    background-color: black;
    color: rgb(30, 129, 129);
}

.mainpage {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

}
.align{
    display: flex;
  justify-content: space-between;
  align-content: flex-start;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  
  height: 400px;
  border: 1px solid #000000;
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


.cercle{
    border: 5px solid #f3fe11;
    width: 300px;
    height: 300px;
   justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
 
    
}

#resistance{
     margin-right: 25vw;
color: transparent;  
    
}
#empire{
    color: transparent;
}


.texte-bulle{
    opacity: 0;
}
div.box {
  --s:400px;  /*Size of the circle */
  --p:15px;  /* padding */
background-color: transparent;
  height: var(--s);
  width:  var(--s);
  border: 5px solid #f3fe11;
  border-radius: 50%;
}
.box i,
.box::before {
  content: '';
  float: left;
  height:100%;
  width: 50%;
  shape-outside: radial-gradient(farthest-side at right, transparent calc(100% - var(--p)), #fff 0);
}
.box i {
  float: right;
  shape-outside: radial-gradient(farthest-side at left,  transparent calc(100% - var(--p)), #fff 0);
}
</style>
