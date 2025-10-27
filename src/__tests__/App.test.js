import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App';

test("<App /> calls componentDidMount and adds a Timer", () => {
  spy(App.prototype, 'componentDidMount');
  let appWrapper = shallow(<App />);

  expect(App.prototype.componentDidMount.calledOnce).toBe(true);
  expect(appWrapper.find('.TimerGrid').length).toBe(1);
  expect(appWrapper.state().timerIDs.length).toBe(1);

  appWrapper.unmount();
});
