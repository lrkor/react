'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async list() {
    const page = this.ctx.request.body.page;
    const size = this.ctx.request.body.size;
    const type = this.ctx.request.body.type;
    const sql = `SELECT article.id as id,article.title as title,article.introduce as introduce,article.count as count,FROM_UNIXTIME(article.time,'%Y-%m-%d') as time FROM article WHERE type=${type}, limit ${(page - 1) * size},${size}`;
    const sql1 = 'SELECT * FROM article';
    const results = await this.app.mysql.query(sql);
    const result1 = await this.app.mysql.query(sql1);
    this.ctx.body = {
      data: results,
      msg: '成功',
      code: 200,
      total: result1.length,
    };
  }

  async detail() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.query.id;
    const sql = `SELECT * FROM article WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result, msg: '成功', code: 200 };
  }
}

module.exports = DefaultController;
