import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRandomQuote from './quotesAPI';


export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
    const response = await getRandomQuote()
    return response
})

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quote: {},
        status:''
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchQuotes.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchQuotes.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.quote = action.payload
          })
          .addCase(fetchQuotes.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})

export default quotesSlice.reducer

export const selectQuote = state => state.quotes.quote
export const selectQuoteStatus = state => state.quotes.status
