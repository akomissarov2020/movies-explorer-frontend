import { shortDuration } from "../settings/settings";

export function filterByDuration(movies, isShort) {
  if (isShort) {
    return movies.filter((item) => item.duration < shortDuration)
  }
  return movies;
}

function isOnlyLatinCharacters(title) {
  return /^[a-zA-Z]+$/.test(title);
}

export function filterByQuery(movies, query) {
  let r = movies.filter(
    (item) => {
      let result = false;
      if (item.nameRU !== null) {
        result = result || item.nameRU.toLowerCase().includes(query.toLowerCase());
      }
      if (item.nameEN !== null) {
        result = result || item.nameEN.toLowerCase().includes(query.toLowerCase());
      }
      return result;
    }
    );
  return r;
}