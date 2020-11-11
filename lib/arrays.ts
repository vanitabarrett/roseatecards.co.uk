export function sortByKey<T>(arr: T[], key: keyof T): T[] {
  function compare(a, b) {
    const aValue = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const bValue = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
    return 0;
  }

  return arr.sort(compare);
}

export function dedupeByKey<T>(arr: T[], key: keyof T): T[] {
  return arr.reduce((itemsSoFar, item) => {
    if (itemsSoFar.find((itemFound) => itemFound[key] === item[key])) {
      return itemsSoFar;
    }
    return [...itemsSoFar, item];
  }, []);
}
