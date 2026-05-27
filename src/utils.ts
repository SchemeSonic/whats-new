export const formatDate = (d: Date): string => {
  const locale = navigator.language || 'en-US';
  const year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(d);
  const day = new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(d);
  return `${day} ${month} ${year}`;
};
