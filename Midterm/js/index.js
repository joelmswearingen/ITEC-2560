$( "#header" ).load( "../html/navigation_bar.html" ); // connects nav bar to all pages

$( "#footer" ).load( "../html/footer.html" );  // connects footer to all pages

// the following js relates to form submission on connect.html

let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let companyInput = document.querySelector('#company')
let titleInput = document.querySelector('#title')
let sizeInput = document.querySelector('#size')
let submitForm = document.querySelector('#submit')
let receiptConfirm = document.querySelector('#submit-confirm')

submitForm.addEventListener('click', function() {
    let userName = nameInput.value
    let userEmail = emailInput.value
    let userCompany = companyInput.value
    let userTitle = titleInput.value
    let userCompanySize = sizeInput.value

    let errors = []

    if (userName.trim().length == 0) {
        errors.push('Please enter your name')
    }

    if (userEmail.trim() == 0) {
        errors.push('Please enter a valid email')
    }

    if (userCompany.trim().length == 0) {
        errors.push('Please enter your company name')
    }

    if (userTitle.trim().length == 0) {
        errors.push('Please enter your work title')
    }

    if (userCompanySize == "") {
        errors.push('Please select an approximate number of employees associated with the afore mentioned company')
    }

    if (errors.length == 0) {
        receiptConfirm.innerHTML = 'Thanks! Please check you email for a special welcome message!'
        nameInput.value = ''
        emailInput.value = ''
        companyInput.value = ''
        titleInput.value = ''
        sizeInput.value = ''
    } else {
        let errorMsg = errors.join('\n')
        alert(errorMsg)
        return
    }
  }
)





