// Helper function to remove specified characters from given string
const filterString = (filter, string) => {

  const reg = new RegExp(filter);

  return string.replace(reg, '').toLowerCase();
  
};

export { filterString }
