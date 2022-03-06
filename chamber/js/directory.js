// this is the js for the loading of cards in the Directory page
let cards = document.querySelector("#cardsection");
let cardstable = document.querySelector("#cardtable");
const response = await fetch("js/directoryEntries.json");
let businesses = await response.json();
businesses['businesses'].forEach(displayBusinesses);

function createRowData(dataItem)
{
    let td = document.createElement('td');
    let para = document.createElement('p');
    para.textContent = dataItem;
    td.appendChild(para);
    return td;
}

function displayBusinessesList(business)
{   
    let row = document.createElement('tr'); 
    row.appendChild(createRowData(business.Business));
    row.appendChild(createRowData(business.Email));
    row.appendChild(createRowData(business.Tel));
    row.appendChild(createRowData(business.Address));
    row.appendChild(createRowData(business.img));
    cardstable.appendChild(row);
}
function displayBusinesses(business){
{
    // Create elements to add to the document
    let card = document.createElement('section');
    card.setAttribute('class','grid');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let phone = document.createElement('h4');
    
    
    // Change the textContent property of the h2 element to contain the name of the business
    h2.textContent = ` ${business.Business}`;
    h3.textContent = `Email: ${business.Email}`;
    //phone.setAttribute(h4);
    phone.innerHTML = `Phone: <Strong>${business.Tel}<Strong>`;
    h5.textContent = `Address: ${business.Address}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.img);
    logo.setAttribute('alt', `Logo image for ${business.Business}`);
    logo.setAttribute('loading', 'lazy');
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(h3);
    card.appendChild(phone);
    card.appendChild(h5)
    
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    }
}

function cardsAsGrid()
{
    clearCards();
    businesses['businesses'].forEach(displayBusinesses);
}
function cardsAsList()
{
    clearCards();
    businesses['businesses'].forEach(displayBusinessesList);
}
function clearCards()
{
    cards.innerHTML = "";
    cardstable.innerHTML = "";
}
let cardasGrid = document.querySelector("#grid");
let cardasList = document.querySelector("#list");
cardasGrid.addEventListener("click", cardsAsGrid);
cardasList.addEventListener("click", cardsAsList);