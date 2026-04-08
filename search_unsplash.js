const fetch = require('node-fetch');
async function search(query) {
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=1_8jpXwR02k22N4IqW2t7D0U5n1Q291YQQD4-K980Wk&per_page=3`);
  const data = await res.json();
  data.results.forEach(r => console.log(query, r.id, r.urls.regular));
}
Promise.all([
  search("honda city car"),
  search("suzuki swift"),
  search("sedan car"),
  search("hatchback car"),
  search("adventure motorcycle"),
  search("royal enfield"),
  search("suv car"),
]);
