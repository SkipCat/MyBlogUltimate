export const dateToString = (date) => {
  const day = date.split('T')[0];
  const time = date.substring(date.lastIndexOf('T') + 1, date.lastIndexOf('.'));
  return `${day} ${time}`;
}
