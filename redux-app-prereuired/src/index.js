import React from 'react';
import ReactDOM from 'react-dom';
// import { Map } from 'immutable';
import { produce } from 'immer';

// whenever have to change a object make a copy of it fist as belo

const person = { name: "john"};

// const personNew = { name: "john",
//    address ={
//     city: "Delhi"
//   }
// };

// 1 . below use for copy
//Object.assign({}, person, {name: "Bob", age: 30})

// 2. using spread operator
// overright name
  //const updated = {...person, name: "abc"}


  // above are example of shallow copy..cannot work with nested objects.
  // have to use deep copy for this as below
// below cannot work
  // const updatedNew = {
  //   ...person,
  //   address: {
  //     ...person.address,
  //     city: "New York"
  //   },
  //   name: "Ruby"
  // }



  // immutability

  const number = [2,3,5,6]

  // below copy numbers array and add 4 at the last position of the array
  const added = [...number, 4];


  // adding the new element at the specific position

  // find element index below
  const index = number.indexOf(2);

  // add element to index of 2

  const addedNew = [...number.slice(0, index), 4,...number.slice(index)];

// remove element from array

const remove = number.filter(n=> n !==2);


// updating

const uupdated = number.map(n=> n==2 ? 20: n);


// immutable library use to create map and hash map like regular js functions

// use immer for better
// both are use to muttant objects in js

let book = { title: "Harry Potter"};

function publish(book) {
   return produce(book, draftBook => {
      draftBook.isPublished = true;
    });
}

let updb  =publish(book)
console.log(book);
console.log(updb);




ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);
