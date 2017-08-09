<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default{
	computed: {
		// allNotes () { return this.$store.notes }
		...mapGetters({
			books: 'allNotes'
		})
	},

	methods: {
		...mapActions([
			'updateActiveNote'
		])
	}
}
</script>
<template>
  <div id="notes-list">
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in books"
          class="list-group-item" href="#" @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{ note.text.trim().substring(0, 30) }}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>