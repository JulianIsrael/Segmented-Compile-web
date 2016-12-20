(function (global) {
  System.config({
    baseURL: '/src',
    paths: {
      'npm:': '/node_modules/'
    },
    map: {
      'app': './src/',
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