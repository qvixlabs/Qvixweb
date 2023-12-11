const currentPage = 'homepage'; 
fetch('seo-content.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('pageTitle').innerText = data[currentPage].title;
    document.getElementById('pageDescription').setAttribute('content', data[currentPage].description);
    document.getElementById('pageKeywords').setAttribute('content', data[currentPage].keywords.join(', '));
    document.getElementById('pageAuthor').setAttribute('content', data[currentPage].author);
    document.getElementById('pageRobots').setAttribute('content', data[currentPage].robots);

  })
  .catch(error => console.error('Error fetching SEO content:', error));