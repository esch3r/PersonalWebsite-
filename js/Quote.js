var quotes = [ 'Few people have the imagination for reality. - Goethe', 'Magic is believing in yourself, if you can do that, you can make anything happen.- Goethe',
'Always pass on what you have learned. - Yoda',
'Train yourself to let go of everything you fear to lose. -Yoda']



function newQuote() { 
   var randomNumber = Math.floor(Math.Random()*quotes.length)); 
   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
