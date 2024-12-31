function buildGallery(images) {
    const galleryContainer = document.getElementById("image-gallery");

    if (images.length != 0) {
        galleryContainer.appendChild(document.createElement("hr"));
        galleryContainer.appendChild(document.createTextNode("Click an image to view details:"))
    }

    const imageContainer = document.createElement("div");

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add("gallery-image");

        imgElement.addEventListener("click", function() {
            onGalleryClicked(image.i);
        });

        imageContainer.appendChild(imgElement);
    });

    galleryContainer.appendChild(imageContainer);
}

function updateImageView(idx) {
    url = images[idx].src;
    alt = images[idx].alt;
    caption = images[idx].txt;

    const img = document.getElementById('image-view-img');
    img.src = url;
    img.alt = alt;

    const tx = document.getElementById('image-view-txt');
    tx.textContent = caption;
    
    const lab = document.getElementById('image-view-label');
    lab.textContent = "Image " + (idx+1) + "/" + images.length;
}

function onGalleryClicked(idx) {
    image_idx = idx;
    
    updateImageView(idx);

    imageView.style.display = "";
}

function onCloseClicked() {
    imageView.style.display = "none";
}

function onLeftClicked() {
    image_idx = (image_idx + images.length - 1) % images.length;

    updateImageView(image_idx);
}

function onRightClicked() {
    image_idx = (image_idx+1) % images.length;

    updateImageView(image_idx);
}

const imageView = document.getElementById("image-view");
console.log("test");
if (imageView) {
    imageView.style.display="none";
}

var image_idx = 0;
