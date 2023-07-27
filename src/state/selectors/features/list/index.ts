/** @format */

import get from 'lodash.get';
import { createSelector } from 'reselect';

const baseSelector = (state: TReduxState) => state.features;
