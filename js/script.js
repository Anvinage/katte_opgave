'use strict';

const btnElem = document.getElementById('btn');
const infoElem = document.querySelector('.cats_info');

btnElem.addEventListener('click', () => {

    // Stien til din JSON-fil
    const url = 'json/cats.json'; 

    fetch(url)
        .then(res => res.json())
        .then(catsData => {
            catsData.forEach(function (val) {

                // opretter et div element 
                const catContainer = document.createElement('div');

                // tilføjer class 'cat-container'
                catContainer.classList.add('cat-container');

                // har skulle vi have indsat en classlist
                const catItem = document.createElement('div');

                // tilføjer class 'cat-item'
                catItem.classList.add('cat-item');

                // opretter et ankter tag
                const catImg = document.createElement('img');
                catImg.src = `${val.image_url}`;
                catImg.alt = `${val.breed}`;

                // Opret ul
                const catInfo = document.createElement('ul');
                catInfo.innerHTML =
                    `
                    <li>${val.name}</li>
                    <li>Weight: ${val.weight}</li>
                    <li>Breed: ${val.breed}</li>
                    `;

                // Tilføj catLink og catInfo til catItem
                catItem.appendChild(catImg);
                catItem.appendChild(catInfo);

                // Tilføj catItem til catContainer
                catContainer.appendChild(catItem);

                // Tilføj catContainer til outputElem
                infoElem.appendChild(catContainer);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
