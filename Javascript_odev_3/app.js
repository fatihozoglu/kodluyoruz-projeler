const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Selecting the div containing buttons
let buttonContainer = document.querySelector(".btn-container");
//Selecting the div containing manu items
let sectionCenter = document.querySelector(".section-center");

//Created an array to hold the button information
let categoryList = ["All"];

//Selectin all categories in the menu item and adding them to categoryList array
menu.forEach( item => {
  if(!categoryList.includes(item.category)) {
    categoryList.push(item.category);
  }
})

//Creating the buttons with the category names stored in categoryList array
  categoryList.forEach( item => {
    let btn = document.createElement("button");
    btn.textContent = item;
    btn.value = item;
    btn.classList.value = "btn btn-outline-dark btn-item";
    buttonContainer.appendChild(btn);
  })

//Filtering the menu items with the given argument(string)
function filterMenu(categoryValue) {
  return menu.filter( item => {
    return item.category === categoryValue;
  })
}

//Creating HTML elements for menu items, appaneding them to document fragment and finally appending it to section-center div element
function createMenu(selectedCategoryArray) {
  sectionCenter.innerHTML = "";
  let documentFragment = new DocumentFragment();

  selectedCategoryArray.forEach( item => {
    let menuItems = document.createElement("div");
    menuItems.classList.value = "menu-items col-lg-6 col-sm-12";
    let image = document.createElement("img");
    image.setAttribute("src", `${item.img}`);
    image.setAttribute("alt", `${item.title}`);
    image.classList.value = "photo";
    let menuInfo = document.createElement("div");
    menuInfo.classList.value = "menu-info";
    let menuTitle = document.createElement("div");
    menuTitle.classList.value = "menu-title";
    let itemTitle = document.createElement("h4");
    itemTitle.textContent = `${item.title}`;
    let itemPrice = document.createElement("h4");
    itemPrice.classList.value = "price";
    itemPrice.textContent = `${item.price}`;
    let menuText = document.createElement("div");
    menuText.classList.value = "menu-text";
    menuText.textContent = `${item.desc}`;
    menuTitle.append(itemTitle, itemPrice);
    menuInfo.append(menuTitle, menuText);
    menuItems.append(image, menuInfo);
    documentFragment.append(menuItems);
  })
  sectionCenter.append(documentFragment);
}

//Adding event listeners to the buttons and changing our HTML with the given value of the button
let buttons = document.querySelectorAll(".btn");
  console.log(buttons);
  buttons.forEach( button => {
    button.addEventListener("click", e => {
      let clickedButton = e.currentTarget.value;
      if (clickedButton === "All") {
        createMenu(menu);
      } else {
        selectedCategory = filterMenu(clickedButton);
        createMenu(selectedCategory);
      }
    })
  });

  //Creating menu with all items in the menu array at the beginning
createMenu(menu);


