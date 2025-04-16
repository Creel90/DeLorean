const quotes = [
    "It is not in the stars to hold our destiny but in ourselves. – William Shakespeare",
    "Remember to look up at the stars and now down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don’t just give up. – Professor Stephen Hawking",
    "For my part I know nothing with any certainty, but the sight of the stars makes me dream. – Vincent Van Gogh",
    "Look up at the stars and not down at your feet. – Stephen Hawking",
    "Not just beautiful, though – the stars are like the trees in the forest, alive and breathing. And they’re watching me. – Haruki Murakami",
    "The stars are the land-marks of the universe. – Sir John Frederick William Herschel",
    "I will love the light for it shows me the way; yet I will love the darkness for it shows me the stars. –Augustine ‘Og’ Mandino",
    "Look at the stars. See their beauty. And in that beauty, see yourself. – Draya Mooney",
    "Shoot for the stars but if you happen to miss shoot for the moon instead. - Neil Armstrong",
    "Dreams are like stars, you may never catch them but if you follow them they will lead you to your destiny. - Liam Payne"
  ];
  
  function newQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("star-quote").textContent = quote;
  }