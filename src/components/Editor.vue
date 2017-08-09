<template>
  <div id="note-editor">
    <textarea
      :value="currentNote.text"
      @input="dataEdit"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
	computed: {
		...mapGetters([
			'currentNote'
		])
	},
	data () {
		return {
			title: null
		}
	},
	methods: {
		...mapActions({
			dataEdit: 'editNote'
		})
	}
}
</script>