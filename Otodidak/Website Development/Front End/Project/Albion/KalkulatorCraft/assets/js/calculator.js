// Material For Crafting Calculations
// Elements
let category = document.getElementsByClassName('#raw-material-calculator .category')
let sub_category = document.getElementsByClassName('#raw-material-calculator .sub-category')
let item = document.getElementsByClassName('#raw-material-calculator .item')
let quantity = document.getElementById('quantity')
let craft_price = document.getElementById('craft-price')
let material_list = document.getElementById('material-list')

// Get Elements Value
category.addEventListener('input', function (){
    category = this.value
})

sub_category.addEventListener('input', function (){
    sub_category = this.value
})

item.addEventListener('input', function (){
    item = this.value
})

amount_to_craft.addEventListener('input', function (){
    amount_to_craft = parseInt(this.value)
})

craft_price.addEventListener('input', function (){
    craft_price = parseInt(this.value)
})

if(amount_to_craft >= 0 && craft_price >= 0){

}
