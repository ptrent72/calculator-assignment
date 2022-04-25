function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']")

inputs.forEach(function (input) {
    input.addEventListener("change", function (e) {
        const this_input = e.target;
        const input_value = parseFloat(this_input.value);
        const this_row = this_input.closest(".row");

        const including = this_row.querySelector(".including");
        const including_price = parseFloat(including.dataset.price);
        const including_cost = input_value * including_price;
        const including_span = including.querySelector("span");
        including_span.innerHTML = round_number(including_cost);

        const excluding = this_row.querySelector(".excluding");
        const excluding_price = parseFloat(excluding.dataset.price);
        const excluding_cost = input_value * excluding_price;
        const excluding_span = excluding.querySelector("span");
        excluding_span.innerHTML = round_number(excluding_cost);

        including.classList.add("active");
        excluding.classList.add("active");


    });
});