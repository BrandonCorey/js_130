"use strict"

const Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  let displayName;
  
  const getRandomChar = () => {
    let char;
    let randomCharCode;
  
    while (true) {
      randomCharCode = (() => {
        return Math.random() * (123 - 48) + 48;
      })();
    
      char = String.fromCharCode(randomCharCode);
      if (/[A-Za-z0-9]/.test(char)) break;
    }
    return char;
  }
  
  const generateDisplayName = () => {
    displayName = '';
  
    while (displayName.length < 16) {
      displayName += getRandomChar();
    }
    return displayName;
  }

  const passwordValid = (password) => {
    return userPassword === password;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName
      this.displayName = generateDisplayName();
      return this;
    },

    firstName(password) {
      if (passwordValid(password)) return userFirstName;
      else return 'Invalid Password';
    },

    lastName(password) {
      if (passwordValid(password)) return userLastName;
      else return 'Invalid Password';
    },

    email(password) {
      if (passwordValid(password)) return email
      else return 'Invalid Password';
    },

    resetPassword(password, newPassword) {
      if (passwordValid(password)) {
        userPassword = newPassword;
        return 'true'
      }
      else return 'Invalid Password';
    },

    reanonymize(password) {
      if (passwordValid(password)) {
        this.displayName = generateDisplayName();
        return true;
      } else {
        return 'Invalid Password'
      }
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');  
console.log(displayName === fooBar.displayName);   // logs false