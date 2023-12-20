import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transfers: [
		{
			text: 'Все',
			key: 'All',
			checked: true,
		},
		{
			key: '0',
			text: 'Без пересадок',
			checked: true,
		},
		{
			key: '1',
			text: '1 пересадка',
			checked: true,
		},
		{
			key: '2',
			text: '2 пересадки',
			checked: true,
		},
		{
			key: '3',
			text: '3 пересадки',
			checked: true,
		},
	],
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		toggleFilter: (state, action) => {
			const isAllChecked = state.transfers.find((filter) => filter.key === 'All')?.checked
			if (action.payload === 'All') {
				state.transfers = state.transfers.map((filter) => ({ ...filter, checked: !isAllChecked }))
				return
			}
			state.transfers = state.transfers.map((filter) => {
				if (filter.key === action.payload || (isAllChecked && filter.key === 'All'))
					return { ...filter, checked: !filter.checked }
				else return filter
			})
			const isOnlyOneIsUnchecked =
				state.transfers.reduce((acc, curr) => acc + Number(curr.checked), 0) === state.transfers.length - 1
			const isAllFilterUnchecked = !state.transfers.find((filter) => filter.key === 'All')?.checked

			if (isOnlyOneIsUnchecked && isAllFilterUnchecked)
				state.transfers = state.transfers.map((filter) => {
					if (filter.key === 'All') return { ...filter, checked: true }
					else return filter
				})
		},
	},
})

export const { toggleFilter } = filterSlice.actions
export default filterSlice.reducer
