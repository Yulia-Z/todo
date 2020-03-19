import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../todo-list';

describe('TodoList verification', () => {
  const props = {
    todos: [],
    onDeleted: jest.fn(),
    onToggleImportant: jest.fn(),
    onToggleDone: jest.fn()
  };

  it('should not be render the component if item list does not contain any items', () => {
    const wrapper = shallow(<TodoList {...props}/>);
    expect(wrapper.find('TodoListItem')).toHaveLength(0);
  });

  it('should be render properly without list item', () => {
    const wrapper = shallow(<TodoList { ...props }/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be render correct number of TodoListItem', () => {
    props.todos = [
      {id: 100, label: 'Drink Coffee'},
      {id: 101, label: 'Have a lunch'},
    ];
    const wrapper = shallow(<TodoList {...props}/>);
    expect(wrapper.find('TodoListItem')).toHaveLength(props.todos.length);
  });

  it('should be render properly', () => {
    const wrapper = shallow(<TodoList { ...props }/>);
    expect(wrapper).toMatchSnapshot();
  })

});
