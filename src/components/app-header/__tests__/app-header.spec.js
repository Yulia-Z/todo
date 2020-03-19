import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../app-header';

describe('AppHeader verification', () => {
  const props = {
    toDo: 3,
    done: 0
  };

  it('should be render the component with props', () => {
    const wrapper = shallow(<AppHeader {...props}/>);
    expect(wrapper.find('h2').text()).toBe(`${props.toDo} more to do, ${props.done} done`);
  });

  it('should be render properly', () => {
    const wrapper = shallow(<AppHeader {...props}/>);
    expect(wrapper).toMatchSnapshot();
  })

});
