const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((itemModules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  itemModules[moduleName] = value.default;
  return itemModules;
}, {});

export default modules;
