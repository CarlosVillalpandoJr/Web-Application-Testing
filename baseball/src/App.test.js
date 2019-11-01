import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByTestId, fireEvent } from '@testing-library/react'
import expectExport from 'expect';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  render(<App />)
});

test('Baseball: Web Application Testing text displays', () => {
  const { getByText } = render(<App />);
  // assert that h1 is on the DOM
  getByText('Baseball: Web Application Testing')    
})
  
test('Gets Add Ball button by ID', () => {
  const { getByTestId } = render(<App/>)
  getByTestId('add-ball-button');
})



test('Strike button incrementing correctly', () => {
  const { getByTestId } = render(<App/>)
  const strikeButton = getByTestId('add-strike-button');
  const strikeCount = getByTestId('add-strike-count')
  expect(strikeCount.textContent)
    .toBe('Strikes: 0');
  fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe('Strikes: 1')
}) 

   



// ​
// /**** This is how you will actually write tests ****/
// ​
// ​
// test('it returns the sum of the passed in numbers', () => {
//   result = sum(5, 3);
//   expected = 8;
// ​
//   expect(result).toBe(expected);
// })
