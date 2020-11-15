
//Form
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    itemList.appendChild(li);

    //------------------------------------------------------------------------------

    // Delete button for the added items

    let deleteButton = document.createElement('button');

    // Adding all classes mentioned in HTMl for the detele button

    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node

    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

    }   

    //------------------------------------------------------------------------------

   // Remove item
    function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);

        console.log(li);
      }
    }
  }
    
    //------------------------------------------------------------------------------

    function filterItems(e) {
        // Convert text to lowercase
        let text = e.target.value.toLowerCase();
        // Get list 
        let items = itemList.getElementsByTagName('li');
        // Turning the items into an array
        Array.from(items).forEach(function(item){
            let itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
        })
    }
  


  