export function BROWSER () {
  const ua = navigator.userAgent.toLowerCase()
  const isAndroid = ua.indexOf('android') !== -1 ? 1 : 0
  return {
    isAndroid: isAndroid,
    isiOS: !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
    isiPhone: ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1,
    isiPad: ua.indexOf('ipad') > -1,
    isWeChat: ua.indexOf('micromessenger') !== -1 ? 1 : 0,
    isQQ: ua.match(/qq\//i) === 'qq/',
    androidVersion: isAndroid ? ua.substr(ua.indexOf('android') + 8, 1) : false
  }
}

export default BROWSER()
