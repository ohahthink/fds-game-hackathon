let boardState = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

// drawBoard는 상태로부터 화면을 그리는 역할과 책임을 갖고 있는 함수
function drawBoard() {
  document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
    rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
      if (boardState[rowIndex][colIndex] === 1) {
        colEl.classList.add('checked')
      } else {
        colEl.classList.remove('checked')
      }
    })
  })

  if (bingo(boardState)) {
    document.querySelector('.result').textContent = 'BINGO!'
    document.querySelector('.reset').classList.add('show')
  } else {
    document.querySelector('.result').textContent = ''
    document.querySelector('.reset').classList.remove('show')
  }

}


function bingo(arr) {
  // 가로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  // 세로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][i] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 반대쪽 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][4 - j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  return false
}

// 한번만 실행되면 되는 코드
document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
  rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
    colEl.addEventListener('click', e => {
      if (!bingo(boardState)) {
        boardState[rowIndex][colIndex] = 1
        drawBoard()
      }
    })
  })
})

document.querySelector('.reset').addEventListener('click', e => {
  //alert('as') 얼럿은 뜹니다, 즉 실행은 됩니다 근데 화면 업데이트가 안됩니다
  boardState = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  drawBoard()
})

drawBoard()
