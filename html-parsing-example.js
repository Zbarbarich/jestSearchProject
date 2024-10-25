const https = require('https');
const { JSDOM } = require('jsdom');

function extractInfoboxFromWikipedia (url) {
    https.get (url, (response) => {
        let html = ''; 

        response.on( 'data', (chunk) => {
            html += chunk;
        });

        response.on( 'end', () => {
            if (response. statusCode === 200) {
                const dom = new JSDOM(html);
                const document = dom.window.document;

                // Select the infobox element
                const infobox = document.querySelector('.infobox');
            
                if (infobox) {
                    // Extract the text content of the infobox
                    const image = infobox.querySelector('img');
                    if (image) {
                        const imageUrl = image.src;
                        console.log('Image URL:', imageUrl);
                    }

                    // Extract the other data as needed 
                    // ...

                } else {
                    console.log('Infobox not found on the page.');
                }
            } else {
                console.error('Failed to fetch HTML. Status code:', response.statusCode);
            }
          });
    }).on('error', (err) => {
        console.error('Error fetching HTML:', err);
    }); 
}

extractInfoboxFromWikipedia('https://en.wikipedia.org/wiki/JavaScript');