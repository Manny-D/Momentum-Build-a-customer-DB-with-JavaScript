console.log(customers)

/* <div class="person">
<img src=" https://place-puppy.com/300x300 " alt="Sophia Burns">
<h3>Sophia Burns</h3>
<div class="attr">
    <div>Email</div>
    <div>Address</div>
    <div>DOB:</div>
    <div>Customer since:</div>
</div> */

// asking the js to build one of these for each customer

const allCustomersDiv = document.querySelector('#allCustomers')

for (let customer of customers) {
    //console.log(`${customer.name.first} ${customer.name.last}`)
    let custDiv = document.createElement('div')

    // test 1 - not working - working w/ Rebecca's help!
    let cImg = document.createElement('img')
    cImg.classList.add('image')
    cImg.src = `${customer.picture.large}`
    custDiv.appendChild(cImg)

    // test 2 - Email - works
    // custDiv.classList.add("cEmail")
    let cEmail = document.createElement('p')
    cEmail.innerHTML = `${customer.email}`
    custDiv.appendChild(cEmail)

    // Working example from class
    custDiv.classList.add("person")
    let nameEl = document.createElement('h3')
    nameEl.innerHTML = `${customer.name.first} ${customer.name.last}`
    custDiv.appendChild(nameEl)
    
    // test 3 - Address works, but need spacing
    //custDiv.classList.add("cAddy")
    let cAdd = document.createElement('p')
    cAdd.innerHTML = `${customer.location.street.number} ${customer.location.street.name}.`
    custDiv.appendChild(cAdd)

    let cAdd1 = document.createElement('p')
    cAdd1.innerHTML = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    custDiv.appendChild(cAdd1)

    // test 4 - DOB
    // custDiv.classList.add("cDob")
    let cDob = document.createElement('p')
    cDob.innerHTML =`DOB: C${customer.dob.date}`
    custDiv.appendChild(cDob)

    // test 5
    // custDiv.classList.add("cSince")
    let cSince = document.createElement('p')
    cEmail.innerHTML = `Customer since: ${customer.registered.date}`
    custDiv.appendChild(cEmail)
    



    allCustomersDiv.appendChild(custDiv)
}


//const image = document.createElement("img").src = "your image source";
//box.innerHTML = ""; // remove any text from the box
//box.append(image); // add the image inside of your element 


