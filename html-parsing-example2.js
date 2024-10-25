const https = require( 'https');
const { JSDOM } = require ('jsdom');

function getAllContent (url) {
  https. get(url, (response) => {
    let html = '';

    response.on( 'data', (chunk) => {
        html += chunk;
    });

    response.on( 'end', () => {
      if (response. statusCode === 200) {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const content = {
            title: document.title,
            headings: [],
            paragraphs: [],
            links: []
        };

        // Extract headings
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
            content.headings.push(heading.textContent);
        });

        // Extract paragraphs
        document.querySelectorAll('p').forEach(paragraph => {
            content.paragraphs.push(paragraph.textContent);
        });

        // Extract links
        document.querySelectorAll('a').forEach(link => {
            content.links.push({
                text: link.textContent,
                href: link.href
            });
        });

        console.log(content);

      } else {
        console.error('Failed to fetch HTML. Status code:', response.statusCode);
      }
    });
  }).on('error', (err) => {
    console.error('Error fetching HTML:', err);
  });
}

getAllContent('https://en.wikipedia.org/wiki/JavaScript');