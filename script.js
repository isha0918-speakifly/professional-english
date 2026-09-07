const form = document.getElementById("courseForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const weakAreas = Array.from(
        document.querySelectorAll('input[name="weakArea"]:checked')
    ).map(item => item.value);


    // Basic validation

    if (name.length < 2) {
        alert("Please enter your full name.");
        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }


    if (weakAreas.length === 0) {
        alert("Please select at least one area you want to improve.");
        return;
    }


    // Save the lead information locally

    const lead = {
        name: name,
        phone: phone,
        email: email,
        weakAreas: weakAreas,
        submittedAt: new Date().toISOString()
    };

    localStorage.setItem(
        "speakifyLead",
        JSON.stringify(lead)
    );


    /*
        RAZORPAY PAYMENT LINK

        After the student completes the form,
        they are redirected to your Razorpay checkout.
    */

    window.location.href =
        "https://rzp.io/rzp/wzjcRF6";

});
