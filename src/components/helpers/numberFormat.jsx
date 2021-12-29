export const numberWithDelimiter = (number) => {
  return new Intl.NumberFormat('es-ES').format(number).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}