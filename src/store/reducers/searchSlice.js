import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../services/apiService'

const initialState = {
	ticketList: [],
	loadingTickets: true,
	searchID: null,
	loadingSearchID: false,
	stoped: false,
}

const getSearchID = createAsyncThunk('search/getSearchID', async () => {
	const response = await apiService.getSearchID()
	return response.searchId
})

const getTickets = createAsyncThunk('search/getTickets', async function tickets(searchID) {
	try {
		const response = await apiService.getTickets(searchID)
		const json = await response.json()
		const { stop, tickets } = json
		return { stop, tickets }
	} catch (err) {
		return tickets(searchID)
	}
})

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchID: (state, action) => {
			state.searchID = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getSearchID.pending, (state) => {
			state.loadingSearchID = true
		})
		builder.addCase(getTickets.fulfilled, (state, action) => {
			const { tickets, stop } = action.payload
			state.stoped = stop
			if (!stop) state.ticketList = [...state.ticketList, ...tickets]
			state.loadingTickets = false
		})
		builder.addCase(getSearchID.fulfilled, (state, action) => {
			state.searchID = action.payload
			state.loadingSearchID = false
		})
	},
})

export { getSearchID, getTickets }
export const { setSearchID } = searchSlice.actions
export default searchSlice.reducer
