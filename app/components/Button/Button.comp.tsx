let target;
let v = 0;
import * as React from 'react';
import {render} from 'react-dom';
declare function require(modules: [string], f: (Blade1: any ) => void); 


export default class Button extends React.Component<any,any>{
 
  loadModule(e){
	if(v>1) v=0;
    require([`http://127.0.0.1:8080/blade1/0.0.${++v}/blade1.js`], function (Blade1) { 
        if(!target){
            target = document.createElement('div');
            document.getElementById('app').appendChild(target);
        }
        render(<Blade1.default />,target);
    });
  }

  render(){
    return (<button onClick={this.loadModule}> Click to load a module on demand</button>);
  }
}
