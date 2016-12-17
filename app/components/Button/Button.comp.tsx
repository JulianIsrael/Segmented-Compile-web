let target;
import * as React from 'react';
import {render} from 'react-dom';
declare function require(modules: [string], f: (Blade1: any ) => void); // for typescript not to be red

export default class Button extends React.Component<any,any>{
 
  loadModule(e){
    require(['../../blade/Blade1/Blade1.blade'], function (Blade1) { //Async loading
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