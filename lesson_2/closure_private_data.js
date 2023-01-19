// Create makeCountLogger function that takes a number argument
// and returns a function. When we invoke the returned function with a number
// it should count up or down from the first number to the second, while logging each increment


// const makeCounterLogger = start => {
//   let counter = start;

//   return stop => {
//     while (true) {
//       console.log(counter)
//       if (counter > stop) counter -= 1;
//       else if (counter < stop) counter += 1;
//       else break;
//     }

//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);


// if start less than stop, counter +1 until equal stop
// if start greater than stop, counter -1 until equal stop
// So we need to break when stop equals counter


// Write a function that returns a function that exhibits the following behavior
// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it prints all of the items on the list. If the list is empty, it prints an appropriate message.

// const makeList = () => {
//   const list = [];
//   return (listItem) => {
//     if (!listItem) {
//       if (list.length === 0) console.log('The list is empty.');
//       list.forEach(item => console.log(item) + '\n');
//     } else if (!list.includes(listItem)) {
//       list.push(listItem);
//       console.log(`${listItem} added!`);
//     } else {
//       const itemIdx = list.indexOf(listItem)
//       list.splice(itemIdx, 1);
//       console.log(`${listItem} removed!`)
//     }
//   }
// }

// let list = makeList();
// list();
// list("make breakfast");
// list("read book"); 
// list();
// list("make breakfast");
// list();

// Modify the makeList function so that it returns an object that provides the interface shown above, including add, list, and remove methods.

const makeList = () => {
  const list = [];
  
  return {
    add(item) {
      let itemIdx = list.indexOf(item);
      if (itemIdx === -1) {
        list.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      let itemIdx = list.indexOf(item);
      if (itemIdx !== -1) {
        list.splice(itemIdx, 1);
        console.log(`${item} removed!`)
      }
    },

    list() {
      if (!list.length) console.log('The list is empty.');
      else list.forEach(item => console.log(item) + '\n');
    }
  }
}

let list = makeList();

list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();