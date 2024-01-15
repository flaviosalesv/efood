import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  itens: ComidaClass[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ComidaClass>) => {
      const c = state.itens.find((i) => i.id === action.payload.id)

      if (!c) {
        state.itens.push(action.payload)
      } else {
        alert('Este item já esta no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.itens = []
    }
  }
})

export const { add, open, close, clear, remove } = cartSlice.actions
export default cartSlice.reducer
