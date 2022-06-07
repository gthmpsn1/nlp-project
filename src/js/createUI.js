const createUI = async () => {
    const request = await fetch('/all');
    try {
        const apiData = await request.json();
        const searchResults = document.getElementById('searchResults');
        
    const polarity = document.createElement('h1');
    polarity.classList.add('polarityUI');
    switch(apiData.polarity) {
        case "P+":
            polarity.innerHTML = "Polarity: Strong Positive";
            break;
        case "P":
            polarity.innerHTML = "Polarity: Positive";
            break;
        case "NEU":
            polarity.innerHTML = "Polarity: Neutral";
            break;
        case "N":
            polarity.innerHTML = "Polarity: Negative";
            break;
        case "N+":
            polarity.innerHTML = "Polarity: Strong Negative";
            break;
        case "NONE":
            polarity.innerHTML = "Polarity: No Polarity";
            break;
    };
    
    const subjectivity = document.createElement('p');
    subjectivity.classList.add('subjectivityUI');
    subjectivity.innerHTML = "Subjectivity: "+apiData.subjectivity;
  
    const snippet = document.createElement('p');
    snippet.classList.add('snippetUI');
    snippet.innerHTML = "Article Snippet: "+apiData.snippet;
  
    searchResults.replaceChildren(polarity, subjectivity, snippet);
        }catch(error){
            console.log("error", error);
        };
  };

  export {createUI};