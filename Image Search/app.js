const accessKey = "SmQPkIbYCYl2Z7Ih0RDc2nkL0yO_t3_TtjlcmFjqeKU";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-form");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");





let keyword = ""
let page = 1;




async function searchImages() {
    const keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}`;

    
        const response = await fetch(url);
        const data = await response.json();
      
      const results = data.results;

      results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html; 
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
      })
    } 



searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})