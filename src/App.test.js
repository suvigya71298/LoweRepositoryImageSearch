import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';
import App from './App';
import { server } from './mocks/server';
import { handlers } from './mocks/handlers';

test('renders the application', () => {
  render(<App />);
  const element=screen.getAllByTestId('header-test')[0];
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('Image Search Engine - Unsplash');
});
test('render the search field', () => {
  render(<App />);
  const element=screen.getAllByTestId('input-test')[0];
  expect(element).toBeInTheDocument();
  const inputField=screen.getByTestId('input-floating-test');
  expect(inputField).toBeInTheDocument();
  const btnSearch=screen.getByTestId('button-test');
  expect(btnSearch).toBeInTheDocument();
  expect(btnSearch).toHaveTextContent('Search Image');
});
test('render the error message on screen load', () => {
  render(<App />);
  const element=screen.getByTestId('error-test');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('');  
});
test('render the error message on button click with no keyword', async() => {
  render(<App />);
  const element=screen.getByTestId('error-test');
  const btnSearch=screen.getByTestId('button-test');
  expect(element).toBeInTheDocument();
  expect(btnSearch).toBeInTheDocument();
  act(()=>{
     fireEvent.click(btnSearch);
  });
  expect(element).toHaveTextContent('URL should not be empty');  
});
test('render the error message on button click when keyword is provided', async() => {
  render(<App />);
  const inputField=screen.getByTestId("input-floating-test");
  const element=screen.getByTestId('error-test');
  const btnSearch=screen.getByTestId('button-test');
  expect(element).toBeInTheDocument();
  expect(btnSearch).toBeInTheDocument();
  fireEvent.change(inputField,{
    target:{value:"Car"}
  })
  act(()=>{
     fireEvent.click(btnSearch);
  });
  expect(element).toHaveTextContent('');  
});
test('render the image on button click', async() => {
  render(<App />);
  const inputField=screen.getByTestId("input-floating-test");
  const element=screen.getByTestId('error-test');
  const btnSearch=screen.getByTestId('button-test');
  expect(element).toBeInTheDocument();
  expect(btnSearch).toBeInTheDocument();
  fireEvent.change(inputField,{
    target:{value:"Car"}
  }) 
  fireEvent.click(btnSearch);
  server.use();
  await waitFor(()=>screen.getByTestId('image-test'));
  expect(element).toHaveTextContent('');  
  const image=screen.getByTestId('image-test');
  expect(image).toBeInTheDocument();  
});

