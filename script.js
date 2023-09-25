let searchInput = document.getElementById('Breed');


function handleSearch(e) {
    e.preventDefault();
    if (e.target.value)
    console.log(e.target.value);
};

function handleBreedImages(e) {

}

const setEvent = ( selector, eventType, handler) => {
   document.querySelector(selector).addEventListener(eventType, handler);
};

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => {
    // console.log(data.message);
})
.catch(err => console.log(err));

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
    //         let section = document.getElementById('randomBreed');
//         let img = document.createElement('img');
//         img.setAttribute('src', data.message);
//         section.appendChild(img);
//     })
//     .catch(err => console.log(err));

// fetch('https://dog.ceo/api/breed/hound/images')
//     .then(res => res.json())
//     .then(data => {
    //         let sectionBreed = document.getElementById('allImagesOfBreed');
    //         let pictures = data.message;
    //         for (let i=0; i<pictures.length; i++) {
        //             let img = document.createElement('img');
        //             img.setAttribute('src', pictures[i]);
        //             sectionBreed.appendChild(img);
        //         }
        //     })
        //     .catch(err => console.log(err));
setEvent('#breed','onchange', handleSearch);