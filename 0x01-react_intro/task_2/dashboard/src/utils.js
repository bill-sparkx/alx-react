export const getFullYear = () => new Date().getFullYear();
 
export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main Dashboard");

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
};