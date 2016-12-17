import * as React from 'react';
import {render} from 'react-dom';

import Header from './components/Header/Header.comp';
import Button from './components/Button/Button.comp';

render(<div> <Header />  <Button /></div>, document.getElementById("app"));
