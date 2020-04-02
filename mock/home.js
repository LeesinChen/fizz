export default {
  'GET /fizz/v1/list': {
    code: 1, // 接口状态 0失败   1成功   2无权限
    total: 100, // 所有科室检查总人数
    checkedTotal: 77, // 所有科室已检查总人数
    checkedMan: 47, // 所有科室已检查男性
    checkedWoman: 30, // 所有科室已检查女性
    spareTotal: 23, // 未检查总人数
    spareMan: 13, // 所有科室未检查男性
    spareWoman: 10, // 所有科室未检查男性
    data: [
      {
        id: 1,  // 科室id
        name: '妇科', // 科室名字
        total: 100, // 总人数
        checkedTotal: 30, // 已检查总人数
        checkedMan: 10, // 已检查男性
        checkedWoman: 20, // 已检查女性
        spareTotal: 70,
        spareMan: 40, // 未检查男性
        spareWoman: 30, // 未检查男性
        list: [  // 当前科室排队人员
          {
            id: 1,  // 用户id
            name: '张三', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A001',  // 排队号
            number: 1992087867, // 流水号
          },
          {
            id: 2,  // 用户id
            name: '李冰冰', // 用户名称
            gender: 2, // 用户性别  1男性   2女性
            queueNumber: 'A002',  // 排队号
            number: 1992087868, // 流水号
          },
          {
            id: 3,  // 用户id
            name: '古力娜扎', // 用户名称
            gender: 2, // 用户性别  1男性   2女性
            queueNumber: 'A003',  // 排队号
            number: 1992087869, // 流水号
          },
          {
            id: 4,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 5,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 6,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 7,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 8,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 9,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 10,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 11,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 12,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
          },
          {
            id: 13,  // 用户id
            name: '王小二', // 用户名称
            gender: 1, // 用户性别  1男性   2女性
            queueNumber: 'A004',  // 排队号
            number: 1992087810, // 流水号
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
      },
      {
        id: 3,  // 科室id
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
      },
      {
        id: 4,  // 科室id
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
      },
      {
        id: 5,  // 科室id
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
      },
      {
        id: 6,  // 科室id
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
      },
      {
        id: 7,  // 科室id
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
      },
      {
        id: 8,  // 科室id
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
      },
    ]
  },
  'GET /fizz/v1/find': {
    code: 1, // 接口状态 0失败   1成功   2无权限
    data: {
      id: 3,  // 用户id
      name: '李冰冰', // 用户名称
      gender: 2, // 用户性别  1男性   2女性
      queueNumber: 123,  // 排队号
      number: 123, // 流水号
      categoryId: 1, // 所在科室id
    },
  }
}
