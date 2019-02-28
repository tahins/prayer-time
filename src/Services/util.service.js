export default class UtilService {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static pluralize(count, noun, suffix = 's') {
    return `${count} ${noun}${count !== 1 ? suffix : ''}`;
  }
}
