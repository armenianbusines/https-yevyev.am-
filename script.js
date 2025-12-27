document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('taxiForm');
    const messageDiv = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Վերցնում ենք բոլոր արժեքները, ներառյալ ուղևորների քանակը
        const route = document.getElementById('route').value;
        const passengers = document.getElementById('passengers').value;
        const date = document.getElementById('date').value;
        const phone = document.getElementById('phone').value;

        if(route && passengers && date && phone) {
            messageDiv.style.color = "green";
            messageDiv.innerText = "Հայտը հաջողությամբ ուղարկվեց " + passengers + " ուղևորի համար:";
            
            // Տվյալների արտապատկերում կոնսոլում (ստուգման համար)
            console.log("Պատվերի տվյալներ:", {
                ուղղություն: route,
                ուղևորներ: passengers,
                ամսաթիվ: date,
                հեռախոս: phone
            });

            form.reset();
        } else {
            messageDiv.style.color = "red";
            messageDiv.innerText = "Խնդրում ենք լրացնել բոլոր դաշտերը:";
        }
    });
});