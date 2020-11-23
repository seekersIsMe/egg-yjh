'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const indexHtml = await fs.readFileSync(path.resolve(__dirname, '../public/index.html'));
    ctx.response.type = 'html';
    ctx.body = indexHtml;
  }
  async list() {
    const { ctx } = this;
    const listHtml = await fs.readFileSync(path.resolve(__dirname, '../public/list.html'));
    ctx.response.type = 'html';
    ctx.body = listHtml;
  }
}

module.exports = HomeController;
