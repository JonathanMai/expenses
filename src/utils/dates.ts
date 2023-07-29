// checks if date 1 is bigger or equal to date 2
export const isDateBiggerOrEqual = (
  dateString1: string,
  dateString2: string,
) => {
  const date1 = createDate(dateString1);
  const date2 = createDate(dateString2);

  return date1.getTime() >= date2.getTime();
};

// takes date in format "DD/MM/YYYY" and creates a new date
export const createDate = (date: string) => {
  const [day, month, year] = date.split('/');

  return new Date(`${year}-${month}-${day}`);
};

// parses date to text
export const dateToString = (date: Date) => {
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
