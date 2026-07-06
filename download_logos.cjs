const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = {
    'aetna.png': 'https://logo.clearbit.com/aetna.com',
    'metlife.png': 'https://logo.clearbit.com/metlife.com',
    'cigna.png': 'https://logo.clearbit.com/cigna.com',
    'bcbs.png': 'https://logo.clearbit.com/bcbs.com',
    'delta.png': 'https://logo.clearbit.com/deltadental.com'
};

const folder = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
}

Object.entries(logos).forEach(([name, url]) => {
    https.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
        if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
            // handle redirect if needed, but clearbit usually redirects to AWS which might work
            if (res.statusCode === 301 || res.statusCode === 302) {
                https.get(res.headers.location, (res2) => {
                    const file = fs.createWriteStream(path.join(folder, name));
                    res2.pipe(file);
                    console.log(`Downloaded ${name}`);
                });
            } else {
                const file = fs.createWriteStream(path.join(folder, name));
                res.pipe(file);
                console.log(`Downloaded ${name}`);
            }
        } else {
            console.log(`Failed ${name} - Status: ${res.statusCode}`);
        }
    }).on('error', (e) => console.log(`Error ${name}: ${e.message}`));
});
