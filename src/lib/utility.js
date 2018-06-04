/* 工具类 */
const utility = {};

/* 颜色 */
utility.color = {
  /**
   * @desc 返回一个随机的rgb颜色值
   * @return {String} rgb
   */
  getRandomColor: function () {
    let color1 = parseInt(Math.random() * 255);
    let color2 = parseInt(Math.random() * 255);
    let color3 = parseInt(Math.random() * 255);
    return "rgb(" + color1 + "," + color2 + "," + color3 + ")";
  },
  /**
   * @desc 向rgb颜色值中添加不透明度，返回rgba颜色值的字符串形式
   * @param {String} rgb
   * @param {Number} opacity
   * @return {String} rgba
   */
  addOpacityToColor: function (rgb, opacity) {
    opacity = opacity > 1 ? 1 : opacity;
    opacity = opacity < 0 ? 0 : opacity;
    return rgb.slice(0, 3) + "a" + rgb.slice(3, -1) + "," + opacity + ")";
  },
  /**
   * @desc 修改rgb、rgba颜色值的不透明度，返回不透明度修改后的rgba颜色值
   * @param {String} color(rgb|rgba)
   * @param {Number} opacity
   * @return {String} rgba
   */
  changeOpacityOfColor: function (color, opacity) {
    // 将传入的颜色值(rgb或rgba)用","分隔，获取到red、green、blue、opacity值(如果有)组成的数组
    let colorValues = color.split(",");

    // 如果是rgba颜色值，即:数组的长度为4，则去除opacity值，使用数组的前三个元素组成rgb颜色值
    if (colorValues.length >= 4) {
      // 删除不透明度opacity
      colorValues.splice(3, 1);

      // 使用数组的前三个元素拼接成rgb颜色值，并去掉"rgba"中的"a"
      color = (colorValues.join() + ")").replace("a", "");
    }

    return this.addOpacityToColor(color, opacity);
  }
};

/* 字符串处理 */
utility.string = {
  /**
   * @desc 字符串按指定的个数折行显示
   * @param str<.String> 传入的源字符串
   * @param countPerLine<.Number> 每行显示的个数，即：每多少个字符后换行，可选，默认为4个
   * @return {string} 格式化后的字符串
   */
  limitCountPerLine: function (str, countPerLine) {
    if (!str) {
      return "";
    }

    if (!countPerLine) {
      // 每行显示的个数
      countPerLine = 4;
    }

    // 计算需要的行数
    let lines = Math.ceil(str.length / countPerLine);

    // 如果一行就可以显示完全
    if (lines === 1) {
      return str;
    }

    // 新的字符串
    let newStr = "";

    // 除最后一行外，获取前面各行包含的字符串，并循环在各行的末尾拼接换行符"\n"
    for (let i = 0; i < lines - 1; i++) {
      newStr += str.slice(countPerLine * i, countPerLine * (i + 1)) + "\n";
    }

    // 获取最后一行包含的字符串
    let lastLine = str.slice(countPerLine * (lines - 1));

    // 如果最后一行为空——刚好按指定的个数分成若干行，则应去掉上面获得的字符串最后的换行符"\n"，否则拼接上最后一行
    if (lastLine === "" || lastLine === " ") {
      return newStr.slice(0, -1);
    }

    return newStr + lastLine;
  },

  /**
   * @desc 裁切字符串并保留指定的字符数(包括最后的"…"在内)，超出的部分使用"…"代替
   * @param {string} string，指定的源字符串
   * @param {number} reservedCount，保留的字符个数
   * @return {string} 裁切并使用"..."代替后的字符串
   */
  clipOverChars(string, reservedCount) {
    return string && string.length > reservedCount ? string.slice(0, reservedCount - 1) + "…" : string;
  }
};

/* 日期处理 */
utility.date = {
  /**
   * @desc 日期时间格式化
   * @param {String} date 时间的字符串或毫秒数
   * @param {String} format 时间格式字符串
   * @return {String} 格式化后的时间字符串
   */
  format: function (date, format) {
    if (!date) {
      return "";
    }

    if (!format) {
      format = "yyyy-MM-dd";
    }

    switch (typeof date) {
      case "string":
        date = new Date(date.replace(/-/, "/"));
        break;
      case "number":
        date = new Date(date);
        break;
    }
    if (!date instanceof Date) {
      return;
    }

    let dict = {
      "yyyy": date.getFullYear(),
      "M": date.getMonth() + 1,
      "d": date.getDate(),
      "H": date.getHours(),
      "m": date.getMinutes(),
      "s": date.getSeconds(),
      "MM": ("" + (date.getMonth() + 101)).substr(1),
      "dd": ("" + (date.getDate() + 100)).substr(1),
      "HH": ("" + (date.getHours() + 100)).substr(1),
      "mm": ("" + (date.getMinutes() + 100)).substr(1),
      "ss": ("" + (date.getSeconds() + 100)).substr(1)
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function () {
      return dict[arguments[0]];
    });
  }
};

/* 查询参数 */
utility.query = {
  /**
   * @desc 获取location中当前ulr所包含的查询参数键值对对象
   * @type {*|Function}
   * @return {Object} paramsObj 查询参数所组成的键值对对象
   */
  getQueryParams: function () {
    // 用于存放查询参数键值对的空对象
    let paramsObj = {};
    // 去掉查询参数前面的"?"
    let paramsStr = window.location.search.substr(1);
    // 按"&"符号分隔各对查询参数并保存为一个数组
    let paramsArr = paramsStr.split("&");

    for (let i = 0; i < paramsArr.length; i++) {
      // 每条查询参数键值对
      let param = paramsArr[i];
      // "="的索引
      let index = param.indexOf("=");
      // 查询参数的键
      let paramKey = param.substring(0, index);
      // 以键值对的形式添加到paramsObj对象中
      paramsObj[paramKey] = param.substr(index + 1);
    }

    return paramsObj;
  },

  /**
   * @desc 将键值对对象序列化成查询字符串的形式
   * @param {Object} obj 键值对对象
   * @return {String} 序列化后的查询字符串，以"?"开头，以"&"链接
   */
  serializeToQuery: function (obj) {
    let tmpArr = [];
    for (let key in obj) {
      tmpArr.push(key + "=" + obj[key]);
    }
    return "?" + tmpArr.join("&");
  }
};

/* DOM操作 */
utility.dom = {
  // 判断是否有指定类名
  hasClass: function (element, className) {
    // 获取元素的类名数组
    let classNameArray = element.className.split(" ");

    return classNameArray.indexOf(className) > -1;
  },
  // 添加指定类名
  addClass: function (element, className) {
    // 如果已有该类名
    if (this.hasClass(element, className)) {
      return;
    }

    // 获取元素的类名数组
    let classNameArray = element.className.split(" ");

    // 添加指定类名
    classNameArray.push(className);

    element.className = classNameArray.join(" ");
  },
  // 移除指定类名
  removeClass: function (element, className) {
    // 如果没有该类名
    if (!this.hasClass(element, className)) {
      return;
    }

    // 获取元素的类名数组
    let classNameArray = element.className.split(" ");

    // 该指定类名在类名数组中的索引
    let classNameIndex = classNameArray.indexOf(className);

    // 删除该指定类名
    classNameArray.splice(classNameIndex, 1);

    element.className = classNameArray.join(" ");
  },
  // 切换类名
  toggleClass: function (element, className) {
    this.hasClass(element, className)
      ? this.removeClass(element, className)
      : this.addClass(element, className);
  },
  // px值转换为rem值
  pxToRem(px, base = 75) {
    return parseFloat(px) / base + "rem";
  }
};

/* LocalStorage */
utility.localStorage = {
  /**
   * @desc 根据指定key从LocalStorage中获取对应值
   * @param {String} key
   * @return {Object}
   */
  get(key) {
    return JSON.parse(window.localStorage.getItem(key.toString()));
  },
  /**
   * @desc 以键值对的形式存储到LocalStorage中
   * @param {String|Number} key
   * @param {Object} value
   */
  set(key, value) {
    window.localStorage.setItem(key.toString(), JSON.stringify(value));
  },
  /**
   * @desc 根据指定key从LocalStorage中删除对应值
   * @param {String|Number} key
   */
  remove(key) {
    window.localStorage.removeItem(key.toString());
  },
  /**
   * @desc 清空当前应用在LocalStorage中存储的数据
   */
  clear() {
    window.localStorage.clear();
  }
};

/* sessionStorage */
utility.sessionStorage = {
  /**
   * @desc 根据指定key从sessionStorage中获取对应值
   * @param {String} key
   * @return {Object}
   */
  get(key) {
    return JSON.parse(window.sessionStorage.getItem(key.toString()));
  },
  /**
   * @desc 以键值对的形式存储到sessionStorage中
   * @param {String|Number} key
   * @param {Object} value
   */
  set(key, value) {
    window.sessionStorage.setItem(key.toString(), JSON.stringify(value));
  },
  /**
   * @desc 根据指定key从sessionStorage中删除对应值
   * @param {String|Number} key
   */
  remove(key) {
    window.sessionStorage.removeItem(key.toString());
  },
  /**
   * @desc 清空当前应用在sessionStorage中存储的数据
   */
  clear() {
    window.sessionStorage.clear();
  }
};

// 浏览器版本、内核相关
utility.userAgent = {
  /**
   * @desc 判断是否是微信
   * @return {boolean}
   */
  isWechat() {
    const userAgent = window.navigator.userAgent.toLowerCase();

    // 微信正则表达式
    const regExp = /MicroMessenger/i;

    return regExp.test(userAgent);
  },
  /**
   * @desc 判断是否是安卓浏览器
   * @return {boolean}
   */
  isAndroid() {
    const userAgent = window.navigator.userAgent.toLowerCase();

    // 安卓正则表达式
    const regExp = /Android|Adr/i;

    return regExp.test(userAgent);
  }
};

/**
 * mask遮罩里面含图片的方法
 * @param {Object} imgList
 */
utility.creatMask = {
  imgMask(imgList) {
    //  创建一个div的dom
    const maskDiv = document.createElement('div');
    //  创建一个img的dom
    const maskImg = document.createElement('img')
    //  maskdiv的css配置
    const divStyle = {
      backgroundColor: 'rgba(0,0,0,0.5)',
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
      'z-index': '9999'
    }
    //  maskimg的css配置
    const imgStyle = imgList
    //  添加css样式
    for (const key in divStyle) {
      maskDiv.style[key] = divStyle[key]
    }
    //  添加css样式
    for (const key in imgStyle) {
      maskImg.style[key] = imgStyle[key]
    }
    // img添加图片的src
    maskImg.src = imgList.src
    // 获取body元素
    let getBod = document.getElementsByTagName('body')[0]
    // maskdiv插入到body
    getBod.appendChild(maskDiv)
    // maskdiv里面插入img
    maskDiv.appendChild(maskImg)
    // 绑定点击事件、点击的时候取消遮罩
    maskDiv.onclick = function () {
      getBod.removeChild(maskDiv)
    }
  }
};

/**
 * @desc 把时间转换为、刚刚、几秒前、几分钟前、几小时前
 * @param 传入时间搓
 */
utility.TemporalSupport = (dateStr) => {
  var publishTime = dateStr/1000,
      d_seconds,
      d_minutes,
      d_hours,
      d_days,
      timeNow = parseInt(new Date().getTime()/1000),
      now_D = new Date().getDate(),
      now_M = new Date().getMonth() + 1,
      now_Y = new Date().getFullYear(),
      d,
      date = new Date(publishTime*1000),
      Y = date.getFullYear(),
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
      //小于10的在前面补0
      if (M < 10) {
          M = '0' + M;
      }
      if (D < 10) {
          D = '0' + D;
      }
      if (H < 10) {
          H = '0' + H;
      }
      if (m < 10) {
          m = '0' + m;
      }
      if (s < 10) {
          s = '0' + s;
      }

      d = timeNow - publishTime;
      d_days = parseInt(d/86400);
      d_hours = parseInt(d/3600);
      d_minutes = parseInt(d/60);
      d_seconds = parseInt(d);

      if (now_Y >= Y && now_M >= M && now_D - D < 4 && now_D > D && d_days <= 3) {
        return now_D - D + '天前';
      }
      // if(d_days > 0 && d_days < 3){
      //     return d_days + '天前';
      // }
      if(d_days <= 0 && d_hours > 0){
          return d_hours + '小时前';
      }
      if(d_hours <= 0 && d_minutes > 0){
          return d_minutes + '分钟前';
      }
      if (d_seconds < 60) {
          if (d_seconds <= 0) {
              return '刚刚发表';
          }else {
              return d_seconds + '秒前';
          }
      }
      if (d_days >= 3 && d_days < 30){
          return M + '-' + D + ' ' + H + ':' + m;
      }
      if (d_days >= 30) {
          return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
      }
  }

export default utility;
