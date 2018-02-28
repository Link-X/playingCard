(function utils() {
  function shuffle(arr) {
    let b = []
    while (arr.length > 0) {
      let index = parseInt(Math.random() * (arr.length - 1))
      b.push(arr[index])
      arr.splice(index, 1)
    }
    return b
  }
})()