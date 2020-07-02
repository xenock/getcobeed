import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    value: 'loading'
  },
  reducers: {
    loading: state => {
      return { value: 'loading' }
    },
    unloading: state => {
      return { value: 'unloading' }
    },
    doingSomething: (state, action) => {
      return { value: action.payload }
    }
  }
})

export const { loading, unloading, doingSomething } = loaderSlice.actions

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const isLoading = state => state.loader.value

export default loaderSlice.reducer
