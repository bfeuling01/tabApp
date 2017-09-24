<template>
  <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title='Songs'>
          <v-btn
            slot="action"
            fab
            class="cyan accent-2"
            light
            small
            absolute
            right
            middle
            @click="navigateTo({name: 'songs-create'})">
            <v-icon>add</v-icon>
          </v-btn>
          <div v-for="song in songs"
            class="song"
            :key="song.id">

            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{song.title}}
                </div>
                <div class="song-artist">
                  {{song.artist}}
                </div>
                <div class="song-genre">
                  {{song.genre}}
                </div>
              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.albumImageURL"/>
              </v-flex>
            </v-layout>
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/songsService'
// import authService from '@/services/authService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // request songs from backend
    // .data is how axios returns the data from the query
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
