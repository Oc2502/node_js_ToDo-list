const input = require('readline-sync')
let itemList=[];

const addItem = () =>{
    let title = input.question('Enter new task: ')
    if (title === '') {
        console.log('enter valid task')
    } else {
        let item = {
            completed: false,
            title : `${title}`
        }  
        itemList.push(item);
 
    };
    console.log(itemList)
    todo()
};


const deleteItem = () => {
    let itemToDelet = input.question('Which task would you like to delete? ')
    itemList.splice(itemToDelet, 1);
    console.log(itemList)
    todo()
};

const doneItem = () => {
    let done = input.question('which task is done ?')
    itemList[done].completed = true;
    itemList.sort(function(x, y) {
        return x.completed - y.completed;
    });
    console.log(itemList)
    todo()
};

const undoneItem = () => {
    let undone = input.question('which task to undone ?')
    itemList[undone].completed = false;
    itemList.sort(function(x, y) {
        return x.completed - y.completed;
    });
    console.log(itemList)
    todo()
};

function todo() {

    const toDoListOptions = ['Add task', 'Delete task', 'Mark as done', 'Mark as undone', 'Show task list'];
    let toDoList = input.keyInSelect(toDoListOptions, 'what would you like to to ? ')
    
    switch (toDoList) {
        case 0: 
            addItem()
            break;
        case 1: 
            deleteItem()
            break;
        case 2:
            doneItem()
            break;
        case 3:
            undoneItem()
            break;
        case 4: 
            console.log(itemList)
            todo()
        default :
        break;
      
    }
}

todo()