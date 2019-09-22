<template>
<div>
  <label>Volume</label>
  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    v-model.number.lazy="value"
  >
  <button @click="mute = !mute">
    {{ mute ? 'Unmute' : 'Mute' }}
  </button>
  {{ storedVolume }}
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'VolumeBar',

  // you work here
  data () {
    return {
      mute: false,
      volume: null
    }
  },
  computed: {
    ...mapState({ storedVolume: 'volume' })
  },
  methods: {
    ...mapActions(['updateVolume'])
  }
}
</script>
