'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 获取用户表的数据
    const result = await this.app.mysql.get('blog_content', {});
    this.ctx.body = result;
  }

  async getArticleList() {
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d' ) as time," +
      'article.count as count ,' +
      '.type.name as name ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
      msg: '成功',
      code: 200,
    };
  }

  async getArticleById() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id;

    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.content as content,' +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d' ) as time," +
      'article.count as count ,' +
      'type.name as name ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.id=' +
      id;

    const result = await this.app.mysql.query(sql);

    this.ctx.body = { data: result, msg: '成功', code: 200 };
  }
}

module.exports = HomeController;
