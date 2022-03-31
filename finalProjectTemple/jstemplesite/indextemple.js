/*indextemple.html hamburgerhome button*/ 
function toggleMenu(){
    let pnav = document.getElementById("primarynav");
    let hamhome = document.getElementById("hamburgerhome");
    if(pnav.getAttribute("class") == "")
    {
      pnav.setAttribute("class", "open");
      hamhome.setAttribute("class", "open");
    }
    else
    {
      pnav.setAttribute("class", "");
      hamhome.setAttribute("class", "");
    }
}

const x = document.getElementById('hamburgerhome');

x.onclick = toggleMenu;

/*date field on every page*/ 
const datefield = document.querySelector("#aside");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}<em>`;

/*json information for temples page*/ 
if( document.querySelector("#cardsection") )
{
  const response = await fetch("jstemplesite/data/temples.json");
  let temples = await response.json();
  temples['temples'].forEach(displaytemplesinfo);
}
//fetch(requestURL)
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (jsonObject) {
//    console.table(jsonObject);  // temporary checking for valid response and data parsing
//    const temples = jsonObject['templesinfo'];
//    temples.forEach(displaytemples)
//  });

  function displaytemplesinfo(temple){
    {
        // Create elements to add to the document
        let card = document.createElement('section');
        card.setAttribute('class','grid');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let address = document.createElement('h3');
        let telephone = document.createElement('h3');
        let email = document.createElement('h3');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        let h6 = document.createElement('h6');
        let schedule = document.createElement('h6');
        let closed = document.createElement('h6')
        let order = '';
        
      
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = `${temple.location} `;
        h3.innerHTML = `Information: <Strong><br>${temple.Address},<br> Phone: ${temple.Telephone},<br> Email:<br> <a href="${temple.Email}"> ${temple.Email}</a><Strong>`;
        h4.innerHTML = `<Strong>Services:<Strong><br> ${temple.Services}`;
        h5.innerHTML = `History:<br> ${temple.History}`;
        h6.innerHTML = `Schedule: ${temple.Schedule},<br> Closed: ${temple.Closed}`
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        img.setAttribute('src', temple.image);
        img.setAttribute('alt', `Image of LDS Temple #${temple.image}`);
        img.setAttribute('loading', 'lazy');

        // if (temple.order === 1){
          // order = `${temple.order}st`;
        // } else if (temple.order === 2){
          // order = `${temple.order}nd`;
        // } else if (temple.order === 3){
          // order = `${temple.order}rd`;
        // } else {
          // order = `${temple.order}th`;
        // }
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(h3, h3, h3)
        card.appendChild(address, telephone, email);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(schedule, closed);
        let cards = document.querySelector("#cardsection");
        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
      }
  }
  