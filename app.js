


const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

function addItem(){
    const newItemText = itemInput.value;
    if(newItemText !== ''){
        const newItem = createListItem(newItemText);
        itemList.appendChild(newItem);
        itemInput.value='';
    }

    
    
}

function createListItem(text){
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}