'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  // 添加文章
  async addArticle() {
    const obj = this.ctx.request.body;
    obj.time = Date.parse(obj.time);
    const sql = `INSERT INTO article (type,title,content,introduce,time,count) VALUES ('${
      obj.type
    }','${obj.title}','${obj.content}','${obj.introducemd}',${
      obj.time / 1000
    },0)`;
    const result = await this.app.mysql.query(sql);
    console.log(result);
    this.ctx.body = {
      data: {},
      msg: '成功',
      code: 200,
    };
  }

  async list() {
    const page = this.ctx.request.body.page;
    const size = this.ctx.request.body.size;

    const sql = `SELECT * FROM article limit ${(page - 1) * size},${size}`;
    const sql1 = 'SELECT * FROM article';
    const result = await this.app.mysql.query(sql);
    const result1 = await this.app.mysql.query(sql1);
    console.log(result);
    console.log(result1);
    this.ctx.body = {
      data: result,
      msg: '成功',
      code: 200,
      total: result1.length,
    };
  }
}

module.exports = AdminController;
