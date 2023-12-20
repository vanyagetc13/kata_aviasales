import { createSlice } from '@reduxjs/toolkit'

const ticketSortOnlies = ['cheap', 'fast', 'optimal']

const initialState = {
	ticketsSort: 'cheap', // one of ticketSortOnlies
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		changeTicketSort: (state, action) => {
			if (ticketSortOnlies.includes(action.payload)) state.ticketsSort = action.payload
		},
	},
})

export const { changeTicketSort } = sortSlice.actions
export default sortSlice.reducer
