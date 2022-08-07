import { format } from 'date-fns';

const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  return format(dateObj, "hh:mm aaaaa'm', dd-MM-yyyy");
};

export { formatDate };
