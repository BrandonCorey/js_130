// Inventory system:
// Item creator - makes sure that all necessary information are present and valid
//  - Valid is two string arguments, one number argument
//  - If not valid, returns an object with a "notValid" property with a value of true
//  - Should not have any properties other than those specified in requirements
// Item manager - responsible for creating items, updating information about items, deleting items, and querying information about the items.
// Report manager - the report manager generates reports for a specific item or ALL items
//  -  Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

// Item requirements
// - SKU code --> 5 Letters, first 3 letters of item + first 2 letters of category 
// - Item name --> The name of the item. Must be atleast 5 letters long
// - Category --> Name of category, Must be atleast 5 letters long
// - Quanitity --> Quantity of the item in stock. Must not be blank.

"use strict"
const createItem = function(name, category, quantity) {
  const nameIsValid = () => name.replace(' ', '').length >= 5;
  const quantityIsValid = () => quantity !== undefined;
  const categoryIsValid = () => {
    return (
      category.replace(' ', '') === category &&
      category.replace(' ', '').length >= 5
      );
  }

  const formatIsValid = () => {
    if (Array.from(arguments).length < 3) return false;
    return (nameIsValid() && quantityIsValid() && categoryIsValid());
    
  }

  const generateSKU = () => {
    let filterName = name.replace(' ', '');''
    let filterCategory = category.replace(' ', '');
    let SKU = filterName.slice(0, 3) + filterCategory.slice(0,2);
    return SKU.toUpperCase();
  }

  if (formatIsValid()) {
      return {
      name,
      category,
      quantity,
      SKU: generateSKU(),
    }
  } else {
    return { notValid: true }
  }
}

const ItemManager = {
  items: [],

  getItem(SKU) {
    return this.items.find(item => item.SKU === SKU)
  },

  create(name, category, quantity) {
    let item = createItem(name, category, quantity);
    if (!item['notValid'])this.items.push(item);
  },

  update(SKU, updateObj) {
    let item = this.getItem(SKU);
    let [updateProp, updateVal] = Object.entries(updateObj).flat();
    item[updateProp] = updateVal;
  },

  delete(SKU) {
    let item = this.getItem(SKU);
    this.items.splice(this.items.indexOf(item), 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(SKU) {
    let item = this.items.getItem(SKU);
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`)
        }
      }
    }
  },

  reportInStock() {
    let string = '';
    this.items.inStock().forEach(item => string += item.name + ', ');
    console.log(string.slice(0, string.length - 2));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10