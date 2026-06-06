const api_key = "live_eQz4jg8FjS2mAigaK9iRmwiQRbv16polxYxgpngAx5WJxGHrEVWuFvjcR0IQPcSm";

fetch(`https://api.thecatapi.com/v1/images/search?limit=18`, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let imagesData = data;
        imagesData.map(function(imageData) {
            let image = document.createElement('img');
            image.src = `${imageData.url}`;

            let gridCell = document.createElement('div');
            gridCell.classList.add('col');
            gridCell.classList.add('col-lg');
            gridCell.appendChild(image)

            document.getElementById('grid').appendChild(gridCell);
        })
    })
    .catch(function(error) {
        console.log(error)
    })

fetch(`https://api.thecatapi.com/v1/images/oGefY4YoG`, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let imageData = data;
        let image = document.createElement('img');
        image.src = `${imageData.url}`;
        document.getElementById('sort-breed').appendChild(image);
    })
    .catch(function(error) {
        console.log(error);
    })