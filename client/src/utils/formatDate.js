const formatDate = (date) => {
  return Intl.DateTimeFormat().format(new Date(date));
};

export default formatDate;
