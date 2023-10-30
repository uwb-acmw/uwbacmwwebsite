
// const searchFrom = document.querySelector('.news-container');
const newsList = document.querySelector('.news-list');


document.addEventListener('DOMContentLoaded', retrieve);

function retrieve(e) {
    e.preventDefault();
    const apiKey = '112fbf65a16f4c999662bd0dc27b35d3';
    const fixedTopic = 'female tech entrepreneurs'; //or 'female tech leaders'

    const apiUrl = `https://newsapi.org/v2/everything?q=${fixedTopic}&apiKey=${apiKey}`;

    console.log(fixedTopic);
    fetch(apiUrl).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);

        // Display up to 7 articles
        const articlesToShow = data.articles.slice(0, 7);

        // Create an unordered list
        let ul = document.createElement('ul');
        // Remove bullet points
        ul.style.listStyleType = 'none';

        articlesToShow.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.style.marginBottom = '10px';
            //li.style.marginLeft = '-50px';
            li.appendChild(a);
            ul.appendChild(li);
        });

        // Append the unordered list to the newsList element
        newsList.appendChild(ul);
    });
}



    // news from techCrunch
    //const apiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=112fbf65a16f4c999662bd0dc27b35d3";

    // multiple fixed topics
    //const topics = ['women in computing'];
    //const combinedTopics = topics.join('|'); // Combine topics with logical OR operator
    //const apiUrl = `https://newsapi.org/v2/everything?q=${combinedTopics}&apiKey=${apiKey}`;

    // taking multiple key words and generating query results from that
    //const specificQuery = '"women" "technology" "female"';
    //const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(specificQuery)}&apiKey=${apiKey}`;
