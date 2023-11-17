// Properties
let items = {
    item_categories: [
        {
            name: 'Resource',
            sub_categories: [
                {
                    name: 'Metal Bar',
                    items: ['Copper Bar', 'Bronze Bar', 'Steel Bar', 'Titanium Bar', 'Runite Bar', 'Meteorite Steel Bar', 'Adamantium Steel Bar']
                },
                {
                    name: 'Ore',
                    items: ['Copper Ore', 'Tin Ore', 'Iron Ore', 'Titanium Ore', 'Runite Ore', 'Meteorite Ore', 'Adamantium Ore']
                }
            ]
        },
        {
            name: 'Melee',
            sub_categories: [
                {
                    name: 'Sword',
                    items: ['Beginner\'s Broadsword', 'Novice\'s Broadsword', 'Journeyman\'s Broadsword', 'Adept\'s Broadsword', 'Expert\'s Broadsword', 'Master\'s Broadsword', 'Grandmaster\'s Broadsword', 'Elder\'s Broadsword']
                }
            ]
        }
    ]
}




// Elements
const raw_material_section = document.getElementById('raw-material-calculator')

const item_categories_selector = document.querySelectorAll('.item-category')
const item_sub_categories_selector = document.querySelectorAll('.item-sub-category')

// Get Elements Value
item_categories_selector[0].addEventListener('change', function () {
    let selected_item_category = items.item_categories.find(category => category.name === this.value)

    // Reset Sub Categories Options
    item_sub_categories_selector[0].innerHTML = '<option value="" disabled="" selected="">Sub Kategori Item</option>'

    // Populate Sub Categories From Selected Sub Category
    if (selected_item_category && selected_item_category != undefined) {
        selected_item_category.sub_categories.forEach(function (e) {
            let option = document.createElement('option')
            let option2 = document.createElement('option')

            let option_text = document.createTextNode(e.name)
            let option2_text = document.createTextNode(e.name)

            option.setAttribute('value', e.name)
            option2.setAttribute('value', e.name)

            option.appendChild(option_text)
            option2.appendChild(option2_text)

            // Populate Category Selector Options
            item_sub_categories_selector[0].appendChild(option)
            item_sub_categories_selector[1].appendChild(option2)
        })
    }

})

// item_sub_categories_selector[0].addEventListener('change', function () {
//     let selected_item_sub_category = items.item_categories.find(category => category.name === this.item_categories_selector)
//     console.log(item_categories_selector.value)
//     console.log(selected_item_sub_category)
//     // Reset Sub Categories Options
//     item_sub_categories_selector[0].innerHTML = '<option value="" disabled="" selected="">Sub Kategori Item</option>'

//     // Populate Sub Categories From Selected Sub Category
//     if (selected_item_sub_category && selected_item_sub_category != undefined) {
//         selected_item_sub_category.items.forEach(function (e) {
//             let option = document.createElement('option')
//             let option2 = document.createElement('option')

//             let option_text = document.createTextNode(e.name)
//             let option2_text = document.createTextNode(e.name)

//             option.setAttribute('value', e.name)
//             option2.setAttribute('value', e.name)

//             option.appendChild(option_text)
//             option2.appendChild(option2_text)

//             // Populate Category Selector Options
//             item_sub_categories_selector[0].appendChild(option)
//             item_sub_categories_selector[1].appendChild(option2)
//         })
//     }

// })

// Populate Category Selector Options
items.item_categories.forEach(function (e) {
    // Create Option Element
    let option = document.createElement('option')
    let option2 = document.createElement('option')

    let option_text = document.createTextNode(e.name)
    let option2_text = document.createTextNode(e.name)


    option.setAttribute('value', e.name)
    option2.setAttribute('value', e.name)

    option.appendChild(option_text)
    option2.appendChild(option2_text)

    // Populate Category Selector Options
    item_categories_selector[0].appendChild(option)
    item_categories_selector[1].appendChild(option2)
})

