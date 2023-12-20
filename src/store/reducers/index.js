import { combineReducers } from '@reduxjs/toolkit'
import filter from './filterSlice'
import sort from './sortSlice'
import search from './searchSlice'

export const rootReducer = combineReducers({ filter, sort, search })
