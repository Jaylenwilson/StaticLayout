let quoteContainer = document.querySelector('.quoteContainer');// grabing quptContainer class from HTML
let logo = document.getElementById('ronLogo');

let baseUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

fetch(baseUrl)// fetching the url
    .then(res => res.json()) //Jsonyifying the api
    .then(json => console.log(json))

logo.addEventListener('click', fetchQuote)

async function fetchQuote() {
    const response = await fetch(baseUrl)
    console.log(response);
    const json = await response.json();
    displayQuote(json)
}

let displayQuote = (data) => {
    console.log(data)

    let logoContainer = document.getElementById('genQuote');
    logoContainer.firstElementChild != null ? logoContainer.removeChild(logo) : null;


    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '-Ron Swanson'
    quoteBy.style =
        'font-size: 3rem; font-family: billionDreams; color #3a2718;'

    let quote = document.createElement('h1');
    quote.className = 'quote'
    quote.innerText = `${data[0]}`
    quote.style =
        'font-family: pinewood; color: #3a2718';

    if (data[0].length >= 50 && data[0].length <= 150) {
        quote.style.fontSize = '5rem';
    } else if (data[0].length < 50) {
        quote.style.fontSize = '7rem';
    } else {
        quote.style.fontSize = '3.5rem';
    }
    let img = document.createElement('img');
    img.src = './assets/ron.png';
    img.style =
        'height: 100px; width: auto; '

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(img);

    img.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);

        fetchQuote();
    })
}


