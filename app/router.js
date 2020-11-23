'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const jwt = app.middleware.jwt({app}) 
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/favicon.ico', (ctx, next) => {
    ctx.body = '';
    next();
  });
  router.get('/login', controller.login.index);
  router.get('/getcode', controller.login.getCode);
  router.get('/nav', controller.nav.index);
  router.get('/nav/getSubmenu', controller.nav.getSubmenu);
  router.get('/nav/getProjectList', controller.nav.getProjectList);
  router.get('/project/getProjectList', controller.project.getProjectList);
  router.get('/project/getdetail', controller.project.getdetail);
  router.get('/project/getIndexList', controller.project.getIndexList);
  router.get('/searchProject', controller.search.index);
  router.get('/add', controller.CRUD.add);
  router.get('/del', controller.CRUD.del);
  router.get('/update', controller.CRUD.update);
  router.get('/setTOP', controller.CRUD.setTOP);
  router.post('/upload', controller.upload.index);
};
