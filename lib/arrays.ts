export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  var currentIndex = newArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

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
