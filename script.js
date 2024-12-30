function buildGallery(images) {
    const galleryContainer = document.getElementById("image-gallery");

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add("gallery-image");

        galleryContainer.appendChild(imgElement);
    });
}

function onGalleryClicked(url, caption) {
    // TODO show full image and caption
}
