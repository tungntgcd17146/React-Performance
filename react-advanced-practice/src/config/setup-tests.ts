/* eslint-disable no-undef */
import '@testing-library/jest-dom';

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import 'jest-enzyme';

enzyme.configure({ adapter: new Adapter() });
