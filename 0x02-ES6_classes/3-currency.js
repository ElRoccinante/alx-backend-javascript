export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(p) {
    this._code = p;
  }

  get name() {
    return this._name;
  }

  set name(o) {
    this._name =o;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
