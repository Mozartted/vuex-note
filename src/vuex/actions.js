export const addNote = ({ commit }, note) => {
	commit('ADD_NOTE', note)
}

export const editNote = ({ commit }, e) => {
	commit('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ commit }) => {
	commit('DELETE_NOTE')
}

export const updateActiveNote = ({ commit }, note) => {
	commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ commit }) => {
	commit('TOGGLE_FAVORITE')
}
