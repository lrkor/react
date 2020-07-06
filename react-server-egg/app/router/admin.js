'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/add', controller.admin.home.add);
  router.post('/admin/list', controller.admin.home.list);
  router.post('/admin/delete', controller.admin.home.delete);
  router.get('/admin/detail', controller.admin.home.detail);
  router.post('/admin/update', controller.admin.home.update);
};
