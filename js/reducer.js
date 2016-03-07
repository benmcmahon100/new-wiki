import $ from 'jquery';

const initialState = {
  files: [],
  currentFile: {
    name: "",
    data: ""
  }
};

export default function(prevState = initialState, action) {
  Array.prototype.unique = function(){
    let data = this;
    let dump = [];
    for(var i = 0; i < data.length; i++){
      if(dump.indexOf(data[i]) < 0){
        dump.push(data[i]);
      }
    }
    return (dump);
  };
  switch (action.type) {
    case 'loadFile':
      return(Object.assign({}, prevState, {currentFile: action.payload}));
      break;
    case 'loadDirectory':
      return(Object.assign({}, prevState, {files: action.payload}));
      break;
    default:
      return(prevState);
  }
}