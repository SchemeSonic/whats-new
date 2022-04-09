import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Rns from '../.';

const App = () => {
  return <Rns title="Hello react-npm-starter(Rns)" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
