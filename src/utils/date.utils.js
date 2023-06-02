/**
 * Get the date from now minus a number of years
 * @param {Number} years
 * 
 * @returns {Date}
 */
export const getDateYearsAgo = (years) => {
  let today = new Date();
  let dateYearsAgo = new Date();
  dateYearsAgo.setFullYear(today.getFullYear() - years);
    }
