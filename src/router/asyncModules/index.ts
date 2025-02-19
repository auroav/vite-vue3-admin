// generate components map
export const constantRouterComponents = {};

// auto load
const modulesFiles = import.meta.glob<Recordable>('./**/*.ts', { eager: true });

Object.keys(modulesFiles).forEach((path) => {
  if (path.startsWith('./index.')) return;
  const value = modulesFiles[path].default;

  // mouted
  Object.keys(value).forEach((ele) => {
    constantRouterComponents[ele] = value[ele];
  });
});

console.log('constantRouterComponents', constantRouterComponents);
