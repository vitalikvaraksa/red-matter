import { Reducer } from 'redux'
import { polygonState } from './types'

// Type-safe initialState!
export const initialState: polygonState = {
  events: [],
  gate: []
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<polygonState> = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as polygonReducer }
