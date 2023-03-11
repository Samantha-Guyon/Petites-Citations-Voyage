const app = {

    currentQuoteIndex: 0,

    init: function() {

        app.displayCurrentQuote();
       
        document.getElementById('nav-next').addEventListener('click', app.handleClickOnNextButton);
        document.getElementById('nav-prev').addEventListener('click', app.handleClickOnPreviousButton);
        document.getElementById('nav-first').addEventListener('click', app.handleClickOnFirstButton);
        document.getElementById('nav-last').addEventListener('click', app.handleClickOnLastButton);

        document.getElementById('addQuoteForm').addEventListener('submit', app.handleFormSubmit);
    },

    handleClickOnDisplayAddFormButton: function(evt) {
        /* console.log('click to display form'); */
        document.getElementById('divAddQuote').classList.remove('d-none');
    },

    displayCurrentQuote: function() {
        
        const quoteElement = document.querySelector('#quote');
        const authorElement = document.querySelector('#author');
       
        quoteElement.textContent = quotes[this.currentQuoteIndex].quote;
        authorElement.textContent = quotes[this.currentQuoteIndex].author;
    },

    handleClickOnNextButton: function() {
        /* console.log('click on next'); */
        if((app.currentQuoteIndex + 1) < quotes.length) {

            app.currentQuoteIndex++;

            app.displayCurrentQuote();
        }
    },

    handleClickOnPreviousButton: function() {
        /* console.log('click on previous'); */
        if(app.currentQuoteIndex !== 0) {

            app.currentQuoteIndex--;

            app.displayCurrentQuote();
        }
    },

    handleClickOnFirstButton: function() {
        /* console.log('click on first'); */
        if(app.currentQuoteIndex !== 0) {

            app.currentQuoteIndex = 0;

            app.displayCurrentQuote();
        }
    },

    handleClickOnLastButton: function() {
        /* console.log('click on last'); */
        if(app.currentQuoteIndex !== (quotes.length - 1)) {
        
            app.currentQuoteIndex = quotes.length - 1;

            app.displayCurrentQuote();
        }
    },
    
    handleFormSubmit: function(evt) {

        evt.preventDefault();
        console.log('form submitted');
        const formElement = evt.target;

        const inputQuote = formElement.querySelector('#input-quote');
        const inputAuthor = formElement.querySelector('#input-author');

        const newQuoteObject = {
            quote: inputQuote.value,
            author: inputAuthor.value
        };

        quotes.push(newQuoteObject);

        formElement.reset();

        document.getElementById('divAddQuote').classList.add('d-none');

        app.handleClickOnLastButton();
    },
};

  document.addEventListener('DOMContentLoaded', app.init);