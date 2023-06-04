// ?page=2&limit=100
const imageList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
loadMore.style.display = "none";
let page = 1;
const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;

function imageTemplate(url) {
    const template = `<div class="image-item">
        <img src="${url}" alt="">
    </div>`;
    imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(page = 1) {
    loading.style.display = "block";
    loadMore.style.display = "none";
    const response = await fetch(`${endpoint}&page=${page}`);
    const images = await response.json();
    if (images.length > 0 && Array.isArray(images)) {
        loading.style.display = "none";
        loadMore.style.display = "block";
        images.forEach((item) => {
            imageTemplate(item.download_url);
        });
    }
}
async function handleLoadMore() {
    page++;
    await fetchImages(page);
}
loadMore.addEventListener("click", handleLoadMore);
fetchImages();
