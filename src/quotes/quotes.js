import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { selectQuote, fetchQuotes, selectQuoteStatus } from './quotesSlice'

export const Quote = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)

    const quoteStatus = useSelector(selectQuoteStatus)

    useEffect(() => {
        if (quoteStatus === '') {
          dispatch(fetchQuotes())
        }
      }, [quoteStatus, dispatch])

      return(
          <div>
              {quote.content}
          </div>
      )
}