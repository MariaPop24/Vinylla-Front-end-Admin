export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
