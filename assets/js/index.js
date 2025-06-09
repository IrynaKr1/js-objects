const customer = {
  customerName: 'Amelia',
  surname: 'Johnson',
  email: 'test@test.com',
  password: '12345',
  phoneNumber: '+380991234567',
  address: {
    city: 'Lviv',
    street: 'Shevchenka str',
    house: '1',
    appartment: '1',
  },
  getAddress() {
    return `Full address: ${this.address.city}, ${this.address.street}, ${this.address.house} / ${this.address.appartment}`;
  },
  changePhoneNumber(newNumber) {
    this.phoneNumber = newNumber;
  },
};

console.log(customer.getAddress());
customer.changePhoneNumber('123456');
console.log(customer);
customer.gender = 'female';
delete customer.address;

// Зробити копії об'єкту customer двома різними способами.

let newCustomer = customer;
console.log(newCustomer);

let copy = Object.assign({}, customer);
copy.customerName = 'John';
console.log(copy);