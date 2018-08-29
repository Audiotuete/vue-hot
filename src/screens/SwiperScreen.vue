
<template>
  <div>
    <vue-swing
      @throwoutleft="vote(answerValues.NO)"
      @throwoutup="showNotepad = true"
      @throwoutright="vote(answerValues.YES)"
      :config="config"
      ref="vueswing"
      class="swing-wrapper"
    >
      <div class="card"></div>  
      <div
        v-if="!showNotepad"
        v-for="card in cards"
        :key="card"
        class="card"
        ref="card">
          <youtube id="youtube-player" 
            video-id 
            :player-vars="playerVars" 
            ref="youtube" 
            @playing="playing" 
            >
          </youtube>
          <button v-if="!isPlaying" class="button-play" @click="playVideoIndex(2)"><i class="fa fa-play"></i></button>
          <button class="button-replay" style="marigin: 20px" @click="replayVideo()"><i class="fa fa-undo"></i></button>
          
      </div>

    </vue-swing>
    
    <div v-if="!showNotepad" class="choicebar">
      <div class="choice-container">
        <button @click="vote(answerValues.NO)" class="button-no" href='#'><i class="sl-icon icon-close"></i></button>
        <button @click="showNotepad = true" class="button-note" href='#'><i class="sl-icon icon-note"></i></button>
        <button @click="vote(answerValues.YES)" class="button-yes" href='#'><i class="sl-icon icon-check"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSwing from 'vue-swing'

export default {
  name: 'swiper-screen',
  components: { VueSwing },
  data () {
    return {
      cards: ['A'],
      answerValues: {'NO': 0, 'YES': 1, 'NOTE': 2},
      isPlaying: false,
      showNotepad: false,
      playerVars: {
        listType: 'playlist',
        list: 'PLglaqunAuU1jKrln443Vi2xkwX_Oimg_G',
        autoplay: 0,
        rel: 0,
        showinfo: 0,
        showsearch: 0,
        controls: 0,
        modestbranding: 0,
        cc_load_policy: 1
      }


    }
  },
  computed: {

    config () {
      return {        
        allowedDirections: [
          VueSwing.Direction.UP,
          // VueSwing.Direction.DOWN,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        minThrowOutDistance: 1000,
        maxThrowOutDistance: 5000,
        throwOutConfidence: (xOffset, yOffset, element) => {
          const xConfidence = Math.min(Math.abs(xOffset) / element.offsetWidth * 1.5, 1);
          const yConfidence = Math.min(Math.abs(yOffset) / element.offsetHeight * 2.5, 1);

          return Math.max(xConfidence, yConfidence);
        }
      }
    },
  },
  methods: {
    vote(value = -1) {

      
      this.saveCardAnswer(value, null)
    },

    makeNote(value = -1, note = null) {
      
      this.saveCardAnswer(value, note)
    },

    requestNewCard() {
      // Query here
      this.cards.push(Math.random())	
    },

    saveCardAnswer(value, note) {
      // Mutation here
      console.log(value, note)
      this.cards.shift()
      this.requestNewCard()

    },

    playVideoIndex (index) {
      this.$refs.youtube[0].player.playVideoAt(index)
      // setInterval(() => this.isPlaying = true, 200)
    },

    replayVideo() {
      this.$refs.youtube[0].player.stopVideo()
      this.$refs.youtube[0].player.playVideo()
    },

    playing () {
      this.isPlaying = true;
    } 
  }
}
</script>

<style scoped lang="scss">

.swing-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 150%;
}
.card {
  top: 6vh;
  position: absolute;
  height: calc(79.5% * 1.35);
  width: calc(68.5% * 1.35);
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #fff;
  border-radius: 1.5vh;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.button-play {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  border-radius: 10px;
  height: 12.5vw;
  width: 12.5vw;
  border: none;
  outline: none;
  // color: #fff;
  background-color: rgba(255, 255, 255, .95);

  .fa-play {
    color: #4A90E2;
    padding: 0.75vw 0 0 0.75vw;
  }
}
.button-replay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 72vh;
  left: 5vw;
  z-index: 999;
  border-radius: 10px;
  height: 8vw;
  width: 8vw;
  border: none;
  outline: none;
  // color: #fff;
  background-color: rgba(0, 0, 0, .5);

  .fa-undo {
    font-size: 5vw;
    
  }

}
.choicebar {
  z-index: 99;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 84vh;
  height: 14vh;
  width: 100%;
  background: rgba(255,255,255,1);
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.25);
}
.choice-container {
  width: 85vw;
  display: flex;
  padding-top: 1px;
  justify-content: space-around;
  align-items: center;
}

.sl-icon {
  color: rgb(181, 181, 181);
  font-size: 12vw;

  &.icon-close {
    font-size: 12.5vw;
    color: rgba(208, 2, 26, .5)
  }

  &.icon-note {
    color: rgba(245, 165, 35, .6)
  }

  &.icon-check {
    font-size: 12.5vw;
    color: rgba(125, 211, 33, 0.75)
  }

}

</style>
