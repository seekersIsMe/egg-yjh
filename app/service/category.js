'use strict';
const Service = require('egg').Service;
class Category extends Service {
  get() {
    return [ '蔬菜', '水果' ];
  }
}
module.exports = Category;
