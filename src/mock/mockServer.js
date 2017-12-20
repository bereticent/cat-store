import Mock from 'mockjs'
import homedata from './homedata.json'
import data from './data.json'

// 通过mockjs向外暴露3个接口
Mock.mock('/api2/main', {code: 0, data: homedata.homeDatas});
Mock.mock('/api2/types', {code: 0, data: data.classifyName});
/*Mock.mock('/api/shopping', {code: 0, data: data.shopping});
Mock.mock('/api/register', {code: 0, data: data.register});*/

// export default ???  不用向外暴露什么

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
