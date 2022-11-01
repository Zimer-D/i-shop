import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.sass';
import Layout from './Layout';

import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Provider>
  );
}

export default App;
