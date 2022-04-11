export const formatDate = (d: Date): string => {
  const locale = navigator.language || 'en-US';
  let year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(d);
  let month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(d);
  let day = new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(d);
  return `${day} ${month} ${year}`;
};
