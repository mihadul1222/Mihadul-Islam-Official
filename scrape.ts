import fs from 'fs';

async function fetchImages() {
  const response = await fetch('https://bfashionclothing.com/');
  const html = await response.text();
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    console.log(match[1]);
  }
}
fetchImages();
