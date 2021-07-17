let imgTag = [];
let titleTag = [];
let captionTag = [];
let imageList = [];
let image;
let openList = "<li class='gallery'>";
let  closeList = "</li>";

let getGallery = (galleryData) => {
    for (let i = 0; i < galleryData.length; i++) {
        imgTag.push(`<img src='Images/gallery/${galleryData[i].img}' alt='${galleryData[i].alt}'>`);
        titleTag.push(`<div class='title'>${galleryData[i].title}</div>`);
        captionTag.push(`<div class='caption'>${galleryData[i].caption}</div>`);
        image = openList + imgTag[i] + titleTag[i] + captionTag[i] + closeList;
        imageList.push(image);
    }
}

fetch("galleryData.json")
    .then(response => response.json())
    .then(json => getGallery(json))
    .finally(i => document.getElementById("album").innerHTML = imageList.join(""));