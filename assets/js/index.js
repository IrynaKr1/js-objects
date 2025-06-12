// 1

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

const newCustomer = {...customer}; 
console.log(newCustomer);

let copy = Object.assign({}, customer);
copy.customerName = 'John';
console.log(copy);

// 2

const cat = {
  name: 'Murka',
  color: 'black',
  isMale: false,
  isFurnitureDemage: true,
};

for (let key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

// 3

function Book(author, bookName, publishYear, price) {
  this.author = author;
  this.bookName = bookName;
  this.publishYear = publishYear;
  this.publisher = {
    city: '',
    publisherName: '',
  };
  this.price = price;
}

const bookPrototype = {};
bookPrototype.bookAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.publishYear;
};

bookPrototype.newPrice = function (newPrice) {
  this.price = newPrice;
};

Book.prototype = bookPrototype;

const newBook = new Book(
  'J.K. Rowling',
  'Harry Potter and the Philosophers Stone',
  1997,
  180
);
newBook.publisher.city = 'London';
newBook.publisher.publisherName = 'Minalima';

console.log(newBook);

console.log(`Age: ${newBook.bookAge()} years`);
newBook.newPrice(100);
console.log('Hew price: ', newBook.price);
