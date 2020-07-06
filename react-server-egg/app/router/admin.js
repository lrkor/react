'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/addArticle', controller.admin.home.addArticle);
  router.post('/admin/list', controller.admin.home.list);
};
