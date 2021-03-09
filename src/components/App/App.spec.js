import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });
});
