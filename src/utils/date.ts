import { format } from 'date-fns';

const formatDate = (date: string): string => {
  return format(new Date(date), 'dd-MM-yyyy');
};

export { formatDate };
