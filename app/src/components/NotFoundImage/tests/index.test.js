import NotFoundImage from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<NotFoundImage />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <NotFoundImage />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
