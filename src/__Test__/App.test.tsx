import React from 'react';
import { render, screen , waitFor , fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import App from '../App';

describe("render App Correctly" , ()=>{
  test('renders App correctly',async () => {
    await waitFor(()=>render(<App/>)!) 
    expect(screen.getByTestId("app")).toBeInTheDocument()
    
  });
})


describe("Focusing on the Screen ..." , ()=>{
  test("click on the cardNumber Holder and focus on the first Input" , ()=>{
    render(<App/>)
    fireEvent.click(screen.getByTestId("cardNumberCon"))
    expect( document.activeElement === screen.getByTestId("first_input_card")).toBe(true)
  })
  
  
  test("click on the CVC Holder and focus on the first input" , ()=>{
    render(<App/>)
    fireEvent.click(screen.getByTestId("cvcCon"))
    expect( document.activeElement === screen.getByTestId("first_input_cvc")).toBe(true)
  })
  
  test("click on the Expire Holder and focus on the first input" , ()=>{
    render(<App/>)
    fireEvent.click(screen.getByTestId("ExpireCon"))
    expect( document.activeElement === screen.getByTestId("first_input_exp1")).toBe(true)
  })
  
  
  test("click on the Password Holder and focus on the first input" , ()=>{
    render(<App/>)
    fireEvent.click(screen.getByTestId("passwordCon"))
    expect( document.activeElement === screen.getByTestId("first_input_password")).toBe(true)
  })
})

