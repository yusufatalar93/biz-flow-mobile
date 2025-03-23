// src/models/RegisterRequest.js

class RegisterRequest {
  constructor(password, confirmationPassword, firstname, lastname, email, phone, companyName, address) {
    this.password = password;
    this.confirmationPassword = confirmationPassword;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.companyName = companyName;
    this.address = address;
  }
}

export default RegisterRequest;

