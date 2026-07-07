const https = require('https');

https.get('https://www.youtube.com/results?search_query=dental+patient+education+animation', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/"videoId":"([^"]+)"/g);
    if (matches) {
      console.log(matches.slice(0, 15).map(m => m.split(':')[1].replace(/"/g, '')));
    }
  });
});
