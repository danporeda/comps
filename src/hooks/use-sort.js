import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setsortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setsortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setsortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setsortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setsortBy(null);
    }
  }

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    handleClick,
    sortedData
  }
}

export default useSort;