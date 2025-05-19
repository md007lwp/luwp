//  let myAjax = ({
//      type = 'GET',
//      url = '',
//      data = null,
//      rqsHeader = new Map(),
//      isAsync = true,
//      callback = () => {}
//  } = {}) => {
//      //请求的不是正常地址
//      if (!isValidURL(url)) return;
//      //对参数进行校验
//      //get请求，且带有参数【参数格式未校验】
//      if (type === 'GET' && data) url.endsWith('?') ? url += data : url += '?' + data;
//      //post请求,且带有参数【参数格式未校验】
//      if (type === 'POST' && !data) data = JSON.stringify(data);

//      //1兼容早期ie5\6 
//      const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//      //监听请求响应状态

//      return new Promise((resolve, reject) => {
//          xhr.onreadystatechange = () => {
//              if (xhr.readyState === 4) {
//                  if (xhr.status === 200) {
//                      callback(xhr.getResponseHeader('authorization'));
//                      resolve(xhr.responseText);
//                  } else {
//                      reject(xhr.status);
//                  }
//              }
//          }
//          xhr.open(type, url, isAsync);
//          if (rqsHeader.size > 0) {
//              for (let [key, val] of rqsHeader) {
//                  xhr.setRequestHeader(key, val);
//              }
//          }
//          //  xhr.setRequestHeader('Content-type', 'application/json'); //必须在open和send之间使用
//          type === 'GET' ? xhr.send() : xhr.send(data);
//      });
//  }

var newAjax = (() => {
    let token_key = 'authorization';
    async function get(path) {
        const token = localStorage.getItem(token_key);
        const headers = {};
        if (token) headers.authorization = `Bearer ` + token;
        return fetch(path, {
            headers
        });
        // token = response.headers.get(token_key);
        // return await response.json();
    }
    async function post(path, bodyObj) {
        const token = localStorage.getItem(token_key);
        const headers = {
            'Content-Type': 'application/json',
        };
        if (token) headers.authorization = `Bearer ` + token;
        return fetch(path, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyObj)
        });
        // token = response.headers.get(token_key);
        // return await response.json();
    }
    return {
        get,
        post
    };
})()



// async function newAjax({
//     type = 'GET',
//     url = null,
//     headers = {},
//     bodyObj = {}
// } = {}) {
//     if (!isValidURL(url)) return '地址不能为空';
//     if (type === 'POST') bodyObj = {
//         method: type,
//         headers: headers,
//         body: JSON.stringify(bodyObj)
//     };
//     if (type === 'GET') bodyObj = null;
//     //发从请求 默认未GET
//     const result = await fetch(url, bodyObj)
//     //  result.then 会报错，因为使用await 等待后的结果其实是fetch返回的值：response对象，而不是fetch返回的promise对象
//     //获取返回头信息
//     localStorage.setItem('token', result.headers.get('authorization'))
//     //继续获得返回体 并返回
//     if (result.status == '200' && result.statusText === 'OK') {
//         const data = await result.json();
//         return data;
//     }

// }
// newAjax({
//     type: 'POST',
//     url: 'https://study.duyiedu.com/api/user/login',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     bodyObj: {
//         loginId: 'haha',
//         loginPwd: '123123'
//     }
// }).then(data => {
//     console.log(data)
// })
/**
 * 验证url是否是一个正常网址
 * @param {url} url 
 * @returns boolean
 */
// function isValidURL(url) {
//     var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
//     return !!pattern.test(url);
// }