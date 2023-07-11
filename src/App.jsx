import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="*" element={<Navigate to="/greeting" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
