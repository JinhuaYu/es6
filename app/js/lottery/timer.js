// 时间模块

class Timer {
  countdown(end, update, handle){
    const now = new Date().getTime()
    const self = this
    if (now - end) {
      handle.call(self)
    } else {
      let last_time = end - now // 剩余时间
      const px_d = 1000*60*60*24 // 一天有多少毫秒
      const px_h = 1000*60*60 // 一小时有多少毫秒
      const px_m = 1000*60 // 一分钟有多少毫秒
      const px_s = 1000 // 一秒有多少毫秒
      let d = Math.floor(last_time/px_d) // 剩余天数
      let h = Math.floor((last_time-d*px_d)/px_h) // 剩余小时
      let m = Math.floor((last_time-d*px_d-h*px_h)/px_m) // 剩余分钟
      let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s) // 剩余秒
      let r = []
      if (d > 0) {
        r.push(`<em>${d}</em>天`)
      }
      if (r.length || h>0) { // 
        r.push(`<em>${h}</em>时`)
      }
      if (r.length || m>0) {
        r.push(`<em>${m}</em>分`)
      }
      if (r.length || s>0) {
        r.push(`<em>${s}</em>秒`)
      }
      self.last_time = r.join('')
      update.call(self, r.join(''))
      setTimeout(() => {
        self.countdown(end, update, handle)
      }, 1000);
    }
  }
}

export default Timer