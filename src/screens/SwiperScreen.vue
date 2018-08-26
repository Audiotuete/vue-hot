
<template>
  <div>
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
          <button class="button-play" @click="playVideoIndex(2)"></button>
      </div>
    </vue-swing>
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

.swing-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 150%;
  // overflow: hidden;
}
.card {
  top: 10vh;
  position: absolute;
  height: calc(79.5% * 1.3);
  width: calc(68.5% * 1.3);
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  .button-play {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 4%;
    left: 5%;
    z-index: 99;
    font-size: 6rem;
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    outline: none;
    border-color: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    &::after {
      position: absolute;
      top: -0.6rem;
      content: "▸";
    }
  }
}
</style>
