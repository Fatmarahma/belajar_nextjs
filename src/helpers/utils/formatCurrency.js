export function formatCurrency(value, locale = "id-ID", currency = "IDR") {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}
