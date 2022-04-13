export function getKeyAsList(obj, keyWord) {
  let drinkEntries = Object.entries(obj)
  return drinkEntries
    .filter(([key, value]) => key.startsWith(keyWord) && value && value.trim())
    .map(([key, value]) => value)
}
