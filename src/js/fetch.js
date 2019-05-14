const endpoint =
  'https://raw.githubusercontent.com/LyonDataViz/oddata-public/master/';

export const fetchRelativeJson = (relativeFile, apiEndpoint = endpoint) =>
  fetch(apiEndpoint + relativeFile).then(d => d.json());
