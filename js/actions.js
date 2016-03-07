export function loadDirectory(dispatch, payload, err=undefined) {
  dispatch({
    type: 'loadDirectory',
    err: err,
    payload
  });
}

export function loadFile(dispatch, payload, err=undefined) {
  dispatch({
    type: 'loadFile',
    err: err,
    payload
  });
}
