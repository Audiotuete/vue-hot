
<template>
  <div id="app">
    <!-- <button @click="add">Add card</button>
    <button @click="remove">Remove card</button>
    <button @click="swing">Swing card</button> -->

    <vue-swing
      @throwout="onThrowout"
      :config="config"
      ref="vueswing"
      class=swing-wrapper
    >
      <div class="card"></div>  
      <div 
        v-for="card in cards"
        :key="card"
        class="card"
        ref="card">
          <youtube id="youtube-player" video-id :player-vars="playerVars" ref="youtube" @playing="playing"></youtube>
          <button v-html=icon class="button-play" @click="playVideoIndex(0)"></button>

      </div>
    </vue-swing>
  </div>
</template>

<script>
import VueSwing from 'vue-swing'

export default {
  name: 'app',
  components: { VueSwing },
  data () {
    return {
      icon: "&#9656",
      cards: ['A'],
      playerVars: {
        listType: 'playlist',
        list: 'PLglaqunAuU1jKrln443Vi2xkwX_Oimg_G',
        autoplay: 0,
        rel: 0,
        showinfo: 0,
        showsearch: 0,
        controls: 1,
        modestbranding: 1,
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
    player () {
      return this.$refs.youtube[0].player
    },
  },
  methods: {
    // add () {
    //   this.cards.push(`${this.cards.length}`)
    // },
    // remove () {
    //   this.swing()
    //   setTimeout(() => {
    //     this.cards.pop()
    //   }, 100)
    // },
    // swing () {
    //   const cards = this.$refs.vueswing.cards
    //   cards[cards.length - 1].throwOut(
    //     Math.random() * 100 - 50,
    //     Math.random() * 100 - 50
    //   )
    // },
    onThrowout ({ target, throwDirection }) {
      console.log(`Threw out ${target.textContent}!`)
      this.cards.push(Math.random()) 
      this.cards.shift()
    },
    playVideoIndex (index) {
      this.$refs.youtube[0].player.playVideoAt(index)
    },
    playing () {
      // console.log(this.player.getPlaylist())
      // this.player.getPlaylistIndex()
      //   .then((index) => {
      //     this.currentVideoIndex = index
      //   })
    }
  }
}

</script>

<style lang="scss">
body {
  background-color: #f7f7f7;
  margin: 0;

}

.swing-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 150%;
  // overflow: hidden;
}
.card {
  top: 5vh;
  position: absolute;
  height: calc(79.5% * 1.2);
  width: calc(68.5% * 1.2);
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #fafafa;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

  .button-play {
    position: absolute;
    top: 4%;
    left: 5%;
    z-index: 99;
    font-size: 4rem;
    border-radius: 50%;
    height: 10vh;
    width: 10vh;
    outline: none;
    border-color: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);

  }
}

iframe {
  position: absolute;
  pointer-events:none;
  width: calc(95% * 1);
  height: calc(97% * 1);
  .ytp-button {
    display: none;
  }
}
</style>
