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

const ItemManager = (function() {
  const getItem = (items, SKU) => items.find(item => SKU === item.SKU);
  return {
    items: [],

    create(name, category, quantity) {
      let item = createItem(name, category, quantity);
      if (!item['notValid'])this.items.push(item);
    },

    update(SKU, updateObj) {
      let item = getItem(this.items, SKU);
      let [updateProp, updateVal] = Object.entries(updateObj).flat();
      item[updateProp] = updateVal;
    },

    delete(SKU) {
      let item = getItem(this.items, SKU);
      this.items.splice(this.items.indexOf(item), 1);
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    },
  };
})();


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.inStock();

ItemManager.update('SOCSP', { quantity: 0 });

console.log(ItemManager.inStock());