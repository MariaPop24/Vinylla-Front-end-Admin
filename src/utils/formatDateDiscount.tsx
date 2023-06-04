export const formatDateDiscount = (dateString: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  const suffix = getSuffix(dayOfMonth);

  const formattedDate =
    months[date.getMonth()] +
    " " +
    dayOfMonth +
    suffix +
    ", " +
    date.getFullYear();
  return formattedDate;
};

export const getSuffix = (dayOfMonth: number) => {
  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    return "th";
  }
  switch (dayOfMonth % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
