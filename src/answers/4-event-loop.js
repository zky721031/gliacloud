export default class AsyncRunner {
  constructor (el) {
    this.plays = []
    this.el = document.querySelector(el)
  }

  log () {
    let text = Array.prototype.join.call(arguments, ' ')
    text = document.createTextNode(text + '\n')
    this.el.appendChild(text)
  }

  dispatch () {
    document.dispatchEvent(new CustomEvent('done'))
  }

  async play (i) {
    this.log('play', i, 0)
    await new Promise(resolve => {
      document.addEventListener('done', resolve, { once: true })
    })
    this.log('play', i, 1)
    await new Promise(resolve => this.plays.push(resolve))
    this.log('play', i, 2)

    // here we have a dispatch(), don't ignore it!!!
    this.dispatch()
  }

  async run () {
    // please insert the following 3 lines into this method:
    // await Promise.resolve()
    // this.dispatch()
    // this.plays[0]()
    this.log('run 0')
    this.play(0)
    this.play(1)
    this.log('run 1')
    await Promise.resolve()
    this.log('run 2')
  }
}

// expected output
// run 0
// play 0 0
// play 1 0
// play 0 1
// run 1
// play 0 2
// run 2
// play 1 1
