<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"></v-text-field>
        <v-text-field
          label="Artist"
          v-model="song.artist"></v-text-field>
        <v-text-field
          label="Genre"
          v-model="song.genre"></v-text-field>
        <v-text-field
          label="Album"
          v-model="song.album"></v-text-field>
        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageURL"></v-text-field>
        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
            label="Tab"
            multi-line
            v-model="song.tab"></v-text-field>
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"></v-text-field>
      </panel>
      <v-btn
        dark
        class="cyan"
        @click="create"
        to='../songs'>
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/panel'
import SongService from '@/services/songsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      // call api
      try {
        await SongService.post(this.song)
      } catch (err) {
        return null
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
