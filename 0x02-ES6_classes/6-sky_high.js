import Building from './5-building';

export default class kyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(a) {
    this._sqft = a;
  }

  get floors() {
    return this._floors;
  }

  set floors(b) {
    this._floors = b;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
