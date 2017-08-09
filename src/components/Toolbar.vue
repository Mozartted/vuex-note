<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'currentNote'
		])
	},
	methods: {
		...mapActions([
			'addNote',
			'deleteNote',
			'toggleFavorite'
		])
	}
}
</script>

<template>
	<div id="toolbar">
	    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
	    <i @click="toggleFavorite"
	      class="glyphicon glyphicon-star"
	      :class="{starred: currentNote}"></i>
	    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	  </div>
</template>