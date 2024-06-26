const input = document.querySelector('#favechap');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', addchapter);

function addchapter() {
    if (input.value.trim() !=='') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deletebutton = document.createElement('button');
        deletebutton.textContent = '❌';
        li.append(deletebutton);
            deletebutton.addEventListener('click', del);
            function del() {
                list.removeChild(li);
                input.focus()
            };  
        list.append(li);
        input.value = '';
        input.focus();  
    }
    else {
        alert('Insert a Scripture');
        input.focus();
    }        

     
};




