import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../Components/Button';
import QuoteAuthor from '../Components/QuoteAuthor';
import QuotesText from '../Components/QuotesText';
import './Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState('And The Lord Said Unto Moses, Saying...');
    const [author, setAuthor] = useState('Kings');
    const [quotesData, setQuoteData] = useState([]);
    const [color, setColor] = useState('rgb(243, 156, 18)')

    const randomColor = () => {
        let colorPatterns = '1234567890ABCDEF';
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += colorPatterns[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        if (quotesData.length > 0) {
            return;
        } else {
            fetchQuotes();
        }
    }, [])

    const fetchQuotes = () => {
        axios 
            .get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => {
                setQuoteData([...res.data.quotes]);

                const color = randomColor;
                document.body.style.color = color;
                document.body.style.backgroundColor = color;

                setColor(color);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleClick = () => {
        let randomIndex = Math.floor(Math.random() * 16);
        let { quote, author } = quotesData[randomIndex];

        const color = randomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        setQuote(quote);
        setAuthor(author);
        setColor(color);
    }


  return (
    <div id='quote-box'>
        <QuotesText quote={quote} color={color} />
        <QuoteAuthor author={author} color={color} />
        <Button handleClick={handleClick} color={color} />
    </div>
  )
}

export default Quotes