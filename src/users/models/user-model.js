export class User {
  constructor({ id, email, isActive, firstName, lastName, gender }) {
    this.id = id;
    this.email = email;
    this.isActive = isActive;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}
