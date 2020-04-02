/***
 * 列表接口
 * @params  keyword  关键字搜索 姓名、条码号
 * @type {{code: number, total: number, checkedTotal: number, checkedMan: number, checkedWoman: number, spareMan: number, spareWoman: number, data: *[]}}
 */

const response = {
  code: 1, // 接口状态 0失败   1成功   2无权限
  total: 100, // 所有科室检查总人数
  checkedTotal: 30, // 所有科室已检查总人数
  checkedMan: 10, // 所有科室已检查男性
  checkedWoman: 20, // 所有科室已检查女性
  spareMan: 40, // 所有科室未检查男性
  spareWoman: 30, // 所有科室未检查男性
  data: [
    {
      id: 1,  // 科室id
      name: '妇科', // 科室名字
      total: 100, // 总人数
      checkedTotal: 30, // 已检查总人数
      checkedMan: 10, // 已检查男性
      checkedWoman: 20, // 已检查女性
      spareMan: 40, // 未检查男性
      spareWoman: 30, // 未检查男性
      list: [  // 当前科室排队人员
        {
          id: 1,  // 用户id
          name: '张三', // 用户名称
          gender: 1, // 用户性别  1男性   2女性
          queueNumber: 123,  // 排队号
          number: 123, // 流水号
        },
      ]
    },
    {
      id: 2,  // 科室id
      name: '外科', // 科室名字
      total: 100, // 总人数
      checkedTotal: 30, // 已检查总人数
      checkedMan: 10, // 已检查男性
      checkedWoman: 20, // 已检查女性
      spareMan: 40, // 未检查男性
      spareWoman: 30, // 未检查男性
      list: [  // 当前科室排队人员
        {
          id: 1,  // 用户id
          name: '张三', // 用户名称
          gender: 1, // 用户性别  1男性   2女性
          queueNumber: 123,  // 排队号
          number: 123, // 流水号
        },
      ]
    }
  ]
}

/***
 * 人员操作
 *
 * @params id [int] 用户id
 * @params type [int]  1上移  2下移  3转移
 * @params officeId [int] 科室id  type为3时必填 type为1或2时不必填
 */

const params = {
  id: 1,
  type: 3,
  officeId: 8
}
