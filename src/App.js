import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';

const customers = [
{
  'id': (1),
  'image': 'https://placeimg.com/64/64/1',
  'name': 'bryan tan',
  'birthday': '961221',
  'gender': 'female',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Tang Ong',
  'birthday': '990111',
  'gender': 'male',
  'job': 'engineer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Shui Wen',
  'birthday': '981121',
  'gender': 'female',
  'job': 'doctor'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              gender = {c.gender}
              job = {c.job}
              birthday = {c.birthday}
            />
          );
        })
      }
    </div>
  );
}

export default App;
