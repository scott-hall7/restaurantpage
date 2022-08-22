function createContact()    {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "Contact Us!";

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "Phone Number: (777) 777 - 7777"

    const contactLocation = document.createElement("p");
    contactLocation.textContent = "Location: The Bermuda Triangle";
    
    const imageLocation = document.createElement("img");
    imageLocation.src = "images/location.jpg";
    imageLocation.alt = "the bermuda triangle";

    contact.appendChild(contactTitle);
    contact.appendChild(contactPhone);
    contact.appendChild(contactLocation);
    contact.appendChild(imageLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;