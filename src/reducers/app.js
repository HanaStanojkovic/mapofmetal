import { GENRE_SELECTED } from '../constants'

const initialState = {
  selectedGenre: 'heavymetal'
}

export default function map(state = initialState, action) {
  if (
    action.type === GENRE_SELECTED &&
    action.newGenre !== state.selectedGenre
  ) {
    return Object.assign({}, state, {
      selectedGenre: action.newGenre
    })
  }

  return state
}