'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async list() {
    const type = this.ctx.request.body.type;
    const sql = `SELECT article.id as id,article.title as title,article.introduce as introduce,article.count as count,FROM_UNIXTIME(article.time,'%Y-%m-%d') as time FROM article WHERE type=${type} order by id DESC;`;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
      msg: '成功',
      code: 200,
    };
  }

  async detail() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.query.id;
    const sql = `SELECT * FROM article WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result, msg: '成功', code: 200 };
  }

  async updateCount() {
    const id = this.ctx.request.body.id;
    const count = this.ctx.request.body.count;
    const sql = `UPDATE article set count=${count} WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result, msg: '成功', code: 200 };
  }
}

module.exports = DefaultController;
