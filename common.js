//验证手机号
isPhone: function(num) {
  var reg = /^1[3456789]\d{9}$/;
  return reg.test(num);
}

//验证邮箱
isEmail: function(num) {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(num);
}

//验证手机号或者邮箱
isPhoneEmail:function (num) {
  var reg = /(^1[3456789]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/
  return reg.test(num);
}

//验证身份证号码
isNumberId: function(num) {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(num);
}

//时间戳指定为指定的日期格式
formatDate: function(x, y) {
  if (!(x instanceof Date)) {
    var date = new Date();
    date.setTime(x * 1000);
    x = date;
  }
  var z = {
    y: x.getFullYear(),
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  return y.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
    return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(
      -(v.length > 2 ? v.length : 2)
    );
  });
}

//将日期转换成时间戳
timeStamp:function (myDate) {
  var date = new Date(myDate);
  return date.getTime()/1000;
}

//传入截止时间,进行倒计时
leftTimer(enddate) {
  let leftTime = (new Date(enddate)) - new Date(); //计算剩余的毫秒数
  let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
  let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
  let minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟
  let seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数
  days = this.checkTime(days);
  hours = this.checkTime(hours);
  minutes = this.checkTime(minutes);
  seconds = this.checkTime(seconds);
  if (days <= '00' && hours <= '00' && minutes <= '00' && seconds <= '00') {
    return null;
  }
  if (days >= '00' || hours >= '00' || minutes >= '00' || seconds >= '00') {
    return minutes + ":" + seconds
  }
}

//简洁的倒计时
const countDown = (second) => {
  const s = second % 60;
  const m = Math.floor(second / 60);

  return `${`00${m}`.slice(-2)} : ${`00${s}`.slice(-2)}`;
};

let time = 5 * 60;  // 5分钟

const timer = setInterval(() => {
  const show = countDown(time--);
  console.log(show);
  if(time < 0) {
    console.log('倒计时结束！');
    clearInterval(timer);
  }
}, 1000);

//获取N天前的时间
getNday(n) {
  let date = new Date();
  let newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000);
  let time = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
  return time;
}

//检测是否为微信环境
inWeixin: function() {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") != -1;
}

//获取cookie
getCookie: function(name) {
  var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return decodeURI(arr[2]);
  else return null;
}

//设置cookie
setCookie: function(name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString()) +
    ";domain=" + document.domain + ";path=/";
}

//删除指定cookie
clearCookie: function(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = this.getCookie(name);
  if (cval != null){
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=" +     
    document.domain + ";path=/";
  }
}

//删除所有cookie
deleteCookie: function() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--; )
      document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString() + ";domain=" + document.domain + ";path=/";
  }
}

//获取url参数
GetQueryString: function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//获取url '?'后的参数对象
GetRequest: function() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

//保留N位小数，不进行四舍五入
toDecimal:function (cnum,cindex) {
  let value = String(cnum);
  if (value.indexOf(".") > 0) {
    var left = value.substr(0, value.indexOf("."));
    var right = value.substr(value.indexOf(".") + 1, value.length);
    if (right.length > cindex) {
      right = right.substr(0, cindex);
    }
    value = left + "." + right;
    return value;
  }else {
    return cnum;
  }
}

//获取小数点位数
decimalLength(num){
  return String(num).length - (String(num).indexOf('.') + 1);
}

//去除数组中空元素
filter_array(array) {
  return array.filter(item => item);
}

//数组对象排序 大到小 eg:arr.sort(maxSort("age")) //根据key = "age" 做排序
maxSort:function (prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  } 
}

//数组对象排序 小到大 eg:arr.sort(minSort("age"))//根据key = "age" 做排序
minSort:function (prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  } 
}
