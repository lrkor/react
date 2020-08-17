"use strict";

const Controller = require("egg").Controller;

class AdminController extends Controller {
  // 添加文章
  async add() {
    const obj = this.ctx.request.body;
    obj.time = Date.parse(obj.time);
    const sql = `INSERT INTO article (type,title,content,introduce,time,count) VALUES ('${
      obj.type
    }','${obj.title}',"${obj.content}",'${obj.introducemd}',${
      obj.time / 1000
    },0)`;
    const result = await this.app.mysql.query(sql);
    console.log(result);
    this.ctx.body = {
      data: {},
      msg: "成功",
      code: 200,
    };
  }

  async update() {
    const obj = this.ctx.request.body;
    obj.updateTime = Date.parse(obj.time);
    const sql = `UPDATE article set type='${obj.type}',title='${
      obj.title
    }', content="${obj.content}", introduce='${obj.introducemd}', update_time=${
      obj.updateTime / 1000
    } WHERE id=${obj.id}`;
    const result = await this.app.mysql.query(sql);
    console.log(result);
    this.ctx.body = {
      data: {},
      msg: "成功",
      code: 200,
    };
  }

  async list() {
    const page = this.ctx.request.body.page;
    const size = this.ctx.request.body.size;

    const sql = `SELECT article.id as id,article.type as type,article.title as title,article.introduce as introduce,article.count as count,FROM_UNIXTIME(article.time,'%Y-%m-%d') as time FROM article limit ${
      (page - 1) * size
    },${size}`;
    const sql1 = "SELECT COUNT(*) FROM article";
    const result = await this.app.mysql.query(sql);
    const result1 = await this.app.mysql.query(sql1);
    this.ctx.body = {
      data: result,
      msg: "成功",
      code: 200,
      total: result1[0]["COUNT(*)"],
    };
  }

  async delete() {
    const id = this.ctx.request.body.id;
    const sql = `DELETE FROM article WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    console.log(result);
    this.ctx.body = {
      msg: "成功",
      code: 200,
    };
  }

  async detail() {
    const id = this.ctx.query.id;
    const sql = `SELECT article.id as id,article.type as type,article.content as content,article.title as title,article.introduce as introducemd,article.count as count,FROM_UNIXTIME(article.time,'%Y-%m-%d') as time FROM article WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result[0],
      msg: "成功",
      code: 200,
    };
  }
}

module.exports = AdminController;
