function Str(item) {
  this.item = item;
}

Str.prototype.capitalize = function() {
  this.item = (this.item.charAt(0).toUpperCase() + this.item.slice(1));
  return this
};

Str.prototype.unCamelCase = function() {
  // Add a space before each uppercase letter and then replace the first letter with its lowercase version
  this.item = this.item.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) { return str.toLowerCase(); });
  return this
};

Str.prototype.cb = function() {

  return this.item
};

const obj = {
  icedMilkTea: [
    {description: "description here..."},
    { name: "Taiwan Milk Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true },
    { name: "Thai Milk Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true },
    { name: "Green Milk Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true }
  ],
  icedTea: [
    {description: "description here..."},
    { name: "Taiwan Milk Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Thai Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Green Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Peach Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Rose Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Jasmine Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Mixed Berry Tea", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly' }
  ],
  hotTea: [
    {description: "description here..."},
    { name: "Taiwan Milk Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Thai Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Green Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Peach Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Rose Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Jasmine Tea", price: "฿40", sizes: "8oz/14oz", extras: '' },
    { name: "Mixed Berry Tea", price: "฿40", sizes: "8oz/14oz", extras: '' }
  ],
  icedCoffee: [
    {description: "100% Arabica Coffee Beans"},
    { name: "Long Black", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasRoast: true},
    { name: "Cappuccino", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasRoast: true },
    { name: "Latte", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasRoast: true },
    { name: "Flat white", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasRoast: true },
    { name: "Mocha", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasRoast: true }
  ],
  hotCoffee: [
    {description: "100% Arabica Coffee Beans"},
    { name: "Long Black", price: "฿40", sizes: "8oz/14oz", extras: '', hasRoast: true},
    { name: "Espresso", price: "฿40", sizes: "8oz/14oz", extras: '' , hasRoast: true},
    { name: "Cappuccino", price: "฿4.00", sizes: "8oz/14oz", extras: '' , hasRoast: true},
    { name: "Latte", price: "฿40", sizes: "8oz/14oz", extras: '' , hasRoast: true},
    { name: "Flat white", price: "฿40", sizes: "8oz/14oz", extras: '' , hasRoast: true},
    { name: "Mocha", price: "฿40", sizes: "8oz/14oz", extras: '' , hasRoast: true},
    { name: "Caramel Macchiato", price: "฿40", sizes: "8oz/14oz", extras: '' , hasRoast: true}
  ],
  milkDrinks: [
    {description: "description here..."},
    { name: "Cocoa", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true},
    { name: "Chocolate", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true},
    { name: "Ovaltine", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true},
    { name: "Milo", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true},
    { name: "Caramel", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true},
    { name: "Brown Sugar", price: "฿40", sizes: "16oz/22oz", extras: 'Pearl/Jelly', hasMilk: true}
  ],
  softDrinks: [
    {description: "description here..."},
    { name: "Blueberry", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly'},
    { name: "Grape", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Strawberry", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Green Apple", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Pineapple", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Passion Fruit", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Blue Sky", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Watermellon", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
    { name: "Coconut", price: "฿35", sizes: "16oz/22oz", extras: 'Pearl/Jelly' },
  ]
};

let ele;
let str;

for (var i in obj) {
  let desc = x('p'),
  menuItem;

  str = new Str(i);
  ele = x('div', {class: 'col-12 mb-5',
      onclick(){
        this.classList.toggle('d-none')
      }
    },
    x('h2', str.unCamelCase().capitalize().cb()),
    desc,
    x('hr')
  );

  obj[i].forEach(item => {
    if(item.description){
      desc.textContent = item.description;
    } else {
      menuItem = x('div', {class: 'mb-3'},
        x('h4', {class: 'itemName'}, item.name, x('span', {class: 'itemPrice badge bg-secondary'}, item.price +'+')),
        function(){
          if(item.sizes){
            return x('p', {class: 'itemSizes'}, 'Sizes: ', x('span', {class: 'itemName fr'}, item.sizes))
          }
        },
        x('p', {class: 'itemSizes'}, 'Sweetness: ', x('span', {class: 'itemName fr'}, 'Low/Medium/High')),
        function(){
          if(item.hasMilk){
            return x('p', {class: 'itemSizes'}, 'Milk: ', x('span', {class: 'itemName fr'}, 'Full Cream/Skinny Milk '))
          }
        },
        function(){
          if(item.hasRoast){
            return x('p', {class: 'itemSizes'}, 'Coffee Roast: ', x('span', {class: 'itemName fr'}, 'Medium/City/Dark'))
          }
        },
        function(){
          if(item.extras){
            return x('p', {class: 'itemSizes'}, 'Extras: ', x('span', {class: 'itemName fr'}, item.extras))
          }
        },
        x('hr', {class: 'w-50'})
      )

      ele.append(menuItem);
    }



  });

  document.getElementById('mainRow').append(ele)

}
/*
obj.forEach(item => {
  console.log(item)
  return;
  const menuItem = document.createElement("div");
  menuItem.className = "mb-3";
  menuItem.innerHTML = `
    <h4>฿{item.name}</h4>
    <p>฿{item.price}</p>
  `;
  menuDiv.appendChild(menuItem);
});
*/
