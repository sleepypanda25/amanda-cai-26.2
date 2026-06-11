// api key
const api_key = "live_eQz4jg8FjS2mAigaK9iRmwiQRbv16polxYxgpngAx5WJxGHrEVWuFvjcR0IQPcSm";

// fetch 18 random cat images
fetch(`https://api.thecatapi.com/v1/images/search?limit=18`, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // retrieve images
        let imagesData = data;
        imagesData.map(function(imageData) {
            // create image
            let image = document.createElement('img');
            image.src = `${imageData.url}`;

            // create grid cell
            let gridCell = document.createElement('div');
            gridCell.classList.add('col');
            gridCell.classList.add('col-lg');
            gridCell.appendChild(image)

            // add image
            document.getElementById('grid').appendChild(gridCell);
        })
    })
    .catch(function(error) {
        console.log(error)
    })

// fetch ragdoll cat image
fetch(`https://api.thecatapi.com/v1/images/oGefY4YoG`, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // retrieve image
        let imageData = data;
        let image = document.createElement('img');
        image.src = `${imageData.url}`;

        // add image
        document.getElementById('sort-breed').appendChild(image);
    })
    .catch(function(error) {
        console.log(error);
    })