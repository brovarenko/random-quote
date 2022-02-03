import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import styles from './quotes.module.css';
import { Transition } from 'react-transition-group';
import { selectQuote, fetchQuotes, selectQuoteStatus } from './quotesSlice'

export const Quote = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)
    const [toggle, setToggle] = useState(false)
    const quoteStatus = useSelector(selectQuoteStatus)

    useEffect(() => {
        if (quoteStatus === '') {
          dispatch(fetchQuotes())
        }
      }, [quoteStatus, dispatch])
        
      return(
          
          <div className={styles.quoteConteiner}>
            
           
             <div className={`${styles.quote} ${quoteStatus==="loading"?'':styles.animation}`}> {quote.content}</div>
            
          <i className={`${styles.author} ${quoteStatus==="loading"?'':styles.animation}`}>-{quote.author}</i>
            
          <button className={styles.btn}
          onClick={() => dispatch(fetchQuotes())}
        >New quote</button>
          </div>
          
      )
}