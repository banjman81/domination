// Part One
function strikethrough(){
    const list = document.querySelectorAll('#arguments li');
    list[0].style.textDecoration = 'line-through';

}

strikethrough()

function setImage(id, url){
    const img = document.querySelector(id);
    img.style.height = '250px';
    img.src = url;
}

setImage('#image-1', 'https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png')
setImage('#image-2', 'https://cdn.vox-cdn.com/thumbor/HyOhm280EOQO2ubcOZCSONkDGb8=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/68567666/Dr._STONE_Season_2_release_date_Episode_24_ending_with_Stone_Wars_Dr._STONE_manga_compared_to_the_anime_Spoilers.0.jpg')
setImage('#image-3', 'https://i.pinimg.com/originals/2c/68/a2/2c68a2099526c36259b51f707e5e66f7.jpg')

function removeFirstList(){
    const list = document.querySelectorAll('#arguments li');
    list[0].remove();
}

removeFirstList()
removeFirstList()

function resize(id, size){
    const toChange = document.querySelector(id)
    toChange.style.fontSize = size
}

resize('#heading', '100px')

// Part Two

function addArgument(element){
    const addTo = document.querySelector('#arguments')
    addTo.appendChild(element)
}

function modHeight(image){
    image.style.height = '30px'
}

const imageIn = document.createElement('img')
imageIn.src = 'http://www.dnd5eapi.co/public/DnD-5e-meta-4k.png'

modHeight(imageIn)
addArgument(imageIn)

function invisible(element){
    const addTo = document.querySelector(element)
    addTo.className = 'invisible'
}

invisible('h1')

// Part Three
function createLi(string){
    const output = document.createElement('li')
    output.innerText = string
    return output
}

const newListItem = createLi('This is the way!')
addArgument(newListItem)

function newHeader(size, string){
    const header = document.createElement('h'+size)
    header.innerText = string
    return header
}

const header = newHeader(5, 'The header!!!')
addArgument(header)
