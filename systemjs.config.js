(function (global) {
  System.config({
    //baseURL: '/build',
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'build',
      'react': 'npm:react/dist/react.js',
      'react-dom': 'npm:react-dom/dist/react-dom.js'
  },

    packages: {
      app: {
        main: './app.js',
        defaultExtension: 'js'
      }
      
    }
  });
})(this);