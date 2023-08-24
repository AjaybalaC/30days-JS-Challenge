
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;


  const exchangeRates = {
        usd: { eur: 0.85, gbp: 0.73, inr: 73.5 },
        eur: { usd: 1.18, gbp: 0.86, inr: 87.5 },
        gbp: { usd: 1.37, eur: 1.16, inr: 100.2 },
        inr: { usd: 0.014, eur: 0.011, gbp: 0.0099 },
  };

  if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    resultDiv.textContent = `${amount.toFixed(2)} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
  } else {
    resultDiv.textContent = "Invalid conversion.";
  }
});