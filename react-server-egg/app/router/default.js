'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/default/list', controller.default.home.list);
  router.get('/default/detail', controller.default.home.detail);
  router.post('/default/updateCount', controller.default.home.updateCount);
};
