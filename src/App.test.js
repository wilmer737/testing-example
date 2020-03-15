import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import App from './App';
import getPokemon from './getPokemon';

jest.mock('./getPokemon', () => {
  return {
    __esModule: true,
    default: jest.fn().mockResolvedValue({ name: 'Test' })
  }
});

describe('Application', () => {
  beforeEach(() => {
    getPokemon.mockClear();
  })

  test('it shows default counter', async () => {
    const wrapper = render(<App />);
    
    expect(wrapper.queryByText('1 : loading')).toBeTruthy();
    await wait(() => {
      expect(getPokemon).toHaveBeenCalledTimes(1);
      expect(getPokemon).toHaveBeenCalledWith(1);
      expect(wrapper.queryByText('1 : Test')).toBeTruthy();
    })
  });

  it('increments and decrements counter', async () => {
    getPokemon.mockResolvedValue({ name: 'New Test' });
    const wrapper = render(<App />);
    fireEvent.click(wrapper.getByText('+'))

    await wait(() => {
      expect(getPokemon).toHaveBeenCalledTimes(2);
      expect(getPokemon).toHaveBeenCalledWith(2);
      expect(wrapper.queryByText('2 : New Test')).toBeTruthy();
    })
  });
})
