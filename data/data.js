function createData () {
  const data = {
    "cord": [
      {
        "type": "maxKing",
        "count": "大王"
      },
      {
        "type": "minKing",
        "count": "小王"
      },
      {
        "type": "peach",
        "count": "A"
      },
      {
        "type": "peach",
        "count": "2"
      },
      {
        "type": "peach",
        "count": "3"
      },
      {
        "type": "peach",
        "count": "4"
      },
      {
        "type": "peach",
        "count": "5"
      },
      {
        "type": "peach",
        "count": "6"
      },
      {
        "type": "peach",
        "count": "7"
      },
      {
        "type": "peach",
        "count": "8"
      },
      {
        "type": "peach",
        "count": "9"
      },
      {
        "type": "peach",
        "count": "10"
      },
      {
        "type": "peach",
        "count": "J"
      },
      {
        "type": "peach",
        "count": "Q"
      },
      {
        "type": "peach",
        "count": "K"
      },
      {
        "type": "blackPeach",
        "count": "A"
      },
      {
        "type": "blackPeach",
        "count": "2"
      },
      {
        "type": "blackPeach",
        "count": "3"
      },
      {
        "type": "blackPeach",
        "count": "4"
      },
      {
        "type": "blackPeach",
        "count": "5"
      },
      {
        "type": "blackPeach",
        "count": "6"
      },
      {
        "type": "blackPeach",
        "count": "7"
      },
      {
        "type": "blackPeach",
        "count": "8"
      },
      {
        "type": "blackPeach",
        "count": "9"
      },
      {
        "type": "blackPeach",
        "count": "10"
      },
      {
        "type": "blackPeach",
        "count": "J"
      },
      {
        "type": "blackPeach",
        "count": "Q"
      },
      {
        "type": "blackPeach",
        "count": "K"
      },
      {
        "type": "plum",
        "count": "A"
      },
      {
        "type": "plum",
        "count": "2"
      },
      {
        "type": "plum",
        "count": "3"
      },
      {
        "type": "plum",
        "count": "4"
      },
      {
        "type": "plum",
        "count": "5"
      },
      {
        "type": "plum",
        "count": "6"
      },
      {
        "type": "plum",
        "count": "7"
      },
      {
        "type": "plum",
        "count": "8"
      },
      {
        "type": "blackPeach",
        "count": "9"
      },
      {
        "type": "plum",
        "count": "10"
      },
      {
        "type": "plum",
        "count": "J"
      },
      {
        "type": "plum",
        "count": "Q"
      },
      {
        "type": "plum",
        "count": "K"
      },
      {
        "type": "diamonds",
        "count": "A"
      },
      {
        "type": "diamonds",
        "count": "2"
      },
      {
        "type": "diamonds",
        "count": "3"
      },
      {
        "type": "diamonds",
        "count": "4"
      },
      {
        "type": "diamonds",
        "count": "5"
      },
      {
        "type": "diamonds",
        "count": "6"
      },
      {
        "type": "diamonds",
        "count": "7"
      },
      {
        "type": "diamonds",
        "count": "8"
      },
      {
        "type": "diamonds",
        "count": "9"
      },
      {
        "type": "diamonds",
        "count": "10"
      },
      {
        "type": "diamonds",
        "count": "J"
      },
      {
        "type": "diamonds",
        "count": "Q"
      },
      {
        "type": "diamonds",
        "count": "K"
      }
    ],
    "gamePlayer": [
      {
        "name": "电脑1",
        "master": false,
        "id": 1,
        "card": [],
        "computeCard": {
          "selectCard": [],
          "residueCard": []
        }
      },
      {
        "name": "电脑2",
        "master": false,
        "id": 2,
        "card": [],
        "computeCard": {
          "selectCard": [],
          "residueCard": []
        }
      },
      {
        "name": "电脑3",
        "master": false,
        "id": 3,
        "card": [],
        "computeCard": {
          "selectCard": [],
          "residueCard": []
        }
      },
      {
        "name": "玩家1",
        "master": false,
        "id": 4,
        "card": [],
        "computeCard": {
          "selectCard": [],
          "residueCard": []
        }
      },
    ]
  }
  const result = {
    compute1: {
      isNiu: false,
      nui: 0,
      maxCard: []
    },
    compute2: {
      isNiu: false,
      nui: 0,
      maxCard: []
    },
    compute3: {
      isNiu: false,
      nui: 0,
      maxCard: []
    },
    wanj: {
      isNiu: false,
      nui: 0,
      maxCard: []
    }
  }
  return {
    data: data,
    result: result
  }
}

// 数组乱序 (洗牌)
function shuffle (arr) {
  let b = []
  while (arr.length > 0) {
    let index = parseInt(Math.random() * (arr.length - 1))
    b.push(arr[index])
    arr.splice(index, 1)
  }
  return b
}

function setCrad (name) {
  const data = {
    'maxKing': '大王',
    'minKing': '小王',
    'peach': '红桃',
    'blackPeach': '黑桃',
    'plum': '梅花',
    'diamonds': '方块'
  }
  return data[name]
}

function hassClass (el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

function addClass (el, className) {
  if (hassClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

function remClass (el, className) {
  if (!hassClass(el, className)) {
    return
  }
  let rmCl = el.className.split(' ')
  rmCl.splice(rmCl.indexOf(className), 1)
  el.className = rmCl.join(' ')
}

function transitionCard (card) {
  let data = {
    'J': {
      num: 10,
      num2: 11
    },
    'Q': {
      num: 10,
      num2: 12
    },
    'K': {
      num: 10,
      num2: 13
    },
    'A': {
      num: 1,
      num2: 1
    },
  }
  let data2 = {
    num: +card,
    num2: +card
  }
  return data[card] || data2
}

function getSum (data) {
  let sum = 0
  data.forEach(v => {
    let sub = transitionCard(v.count)
    sum += sub.num
  })
  return sum
}