import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: '1',
    name: 'IPhone X',
    type: 'Electronics',
    price: 1000,
    inStock: true,
    date:'1-Oct-2017'
  },
  {
    id: '2',
    name: 'Mac Book',
    type: 'Electronics',
    price: 2500,
    inStock: true,
    date:'1-Jul-2017'
  },
  {
    id: '3',
    name: 'Chiar',
    type: 'Furniture',
    price: 500,
    inStock: true,
    date:'15-Mar-2017'
  },
   {
    id: '4',
    name: 'Table',
    type: 'Furniture',
    price: 250,
    inStock: true,
    date:'5-Oct-2017'
  },
  {
    id: '5',
    name: 'Fan',
    type: 'HouseHold',
    price: 20,
    inStock: false,
    date:'2-Oct-2017'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {  
  var maxId = getMax(items, "id");
  return maxId + 1;
};

function getMax(arr, prop) {
  var max;
  for (var i=0 ; i<arr.length ; i++) {
      if (!max || parseInt(arr[i][prop],10) > parseInt(max[prop],10))
          max = arr[i];
  }
  return max;
}

class ItemsApi {
  static getAllItems() {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items.map(x=> {
          if(x.inStock === true)
          x.inStockStr='Yes'; 
          else 
          x.inStockStr='No';
          return x;
        }) ));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemNameLength = 3;
        if (item.name.length < minItemNameLength) {
          reject(`Name must be at least ${minItemNameLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id === item.id);
          items.splice(existingItemIndex, 1, items);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          return item.id === itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemsApi;
