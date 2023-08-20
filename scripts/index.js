document
  .getElementById("coupon-input-field-button")
  .addEventListener("click", function () {
    const InputField = document.getElementById("coupon-input-field").value;
    if (InputField === "SELL200") {
      const totalPriceString = document.getElementById("total-price").innerText;
      const totalPrice = parseFloat(totalPriceString);

      const discount = totalPrice * 0.2;
      document.getElementById("discount").innerText = discount;
      const total = totalPrice - discount;
      document.getElementById("total").innerText = total;
    }
  });
