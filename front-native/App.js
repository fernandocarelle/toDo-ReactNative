import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './src/views/Home/index';
import Task from './src/views/Task/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return (
    <Routes />
  );
}


