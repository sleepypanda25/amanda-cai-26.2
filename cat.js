const api_key = "live_eQz4jg8FjS2mAigaK9iRmwiQRbv16polxYxgpngAx5WJxGHrEVWuFvjcR0IQPcSm";

fetch("//https://api.thecatapi.com/v1/images/search?breed_ids=ragd", {
    headers: {
        "x-api-key": api_key
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

            let gridCel = document.createElement('div');
            gridCell.classList.add('col');
            gridCell.classList.add('col-lg');
            gridCell.appendChild(image)
        })
    })

document.getElementById('grid').appendChild(gridCell);