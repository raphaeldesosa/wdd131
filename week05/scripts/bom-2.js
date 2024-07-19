function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChaptersList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', () => {
    if(input.value.trim() != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); 
        input.focus(); 
    });
} 
    
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

     





