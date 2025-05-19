/**
 * 远程获取王者荣耀所有的英雄数据
 */
async function getHeroes() {
    return fetch('https://study.duyiedu.com/api/herolist')
        .then((resp) => resp.json())
        .then((resp) => resp.data);
}
// 利用getHeroes方法，获取所有的英雄数据，将英雄名称显示到页面的列表中
// cname
// "廉颇"
// ename
// 105
// hero_type
// 3
// id_name
// "lianpo"
// moss_id
// 3627
// new_type
// 0
// skin_name
// "正义爆轰|地狱岩魂|无尽征程|寅虎·御盾|功夫炙烤|撼地雄心"
// title
// "正义爆轰"

// (async () => {
//     try {
//         const data = await getHeroes();
//         document.querySelector('.heroList').innerHTML = data.map(item => `<li>${item.cname}</li>`).flat().join('');
//     } catch (error) {
//         console.log('获取异常！' + `${error}`);
//     }
// })();


// 完成delay函数
// 该函数可以等待一段指定的时间
// 返回Promise
// async function delay(duration) {
//     setTimeout(() => {

//     }, duration)
// }

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, duration)
    })
}
// delay(1000).then(data => console.log(data));
// delay(1000).then(data => console.log(data));
// delay(1000).then(data => console.log(data));
// Promise.allSettled([delay(1000), delay(1000), delay(1000)]).then(data => data.filter(item => item.status === 'fulfilled').forEach(item => item.value));

// (async () => {
//     try {
//         for (let index = 0; index < 3; index++) {
//             let result = await delay(1000);
//             console.log(result);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })()
// 利用delay函数，等待3次，每次等待1秒，每次等待完成后输出ok
// 等待1秒->ok->等待1秒->ok->等待1秒->ok



// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
//   });

//then进入微队列
//   promise.then(() => {
//     console.log(3);
//   });

//全局上下文
//   console.log(4);

//   p1:fulfilled undefined
//   p2:fulfilled undefined
//   输出  1 2 3  4  


// 2
// setTimeout(() => {
//     console.log(1);
// });

// const promise = new Promise((resolve, reject) => {
//     console.log(2);
//     resolve();
// });

// promise.then(() => {
//     console.log(3);
// });

// console.log(4);
// p1:fulfilled undefined
// p2:fulfilled undefined
// 输出 2 4 3 1

//3
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject();
//     }, 1000);
// });
// const promise2 = promise1.catch(() => {
//     return 2;
// });

// console.log('promise1', promise1);
// console.log('promise2', promise2);

// setTimeout(() => {
//     console.log('promise1', promise1);
//     console.log('promise2', promise2);
// }, 2000);

// p1: pending 
// p2: pending

// p1:rejected undefined
// p2:fulfilled 2


//4
// async function m() {
//     console.log(0);
//     const n = await 1; //进入微队列等待
//     // Promise.resolve(1)
//     // new Promise((resolve, reject) => {
//     //     resolve(1);
//     // }).then(n => console.log(n));
//     console.log(n);
// }

// // function m() {
// //   return Promise.resolve(1).then((n) => {
// //     console.log(n);
// //   });
// // }

// m();
// console.log(2);
//   输出:0 2 1


// 5---------------------------------------------------------------------------------------------------------------------------------------------------------
// async function m() {
//     console.log(0);
//     const n = await 1;
//     console.log(n);
// }

// (async () => {
//     await m();
//     console.log(2);
// })();

// console.log(3);
//    0 3 1 2
// 6------------------------------------------------------------------------------------------------------------------------------
// async function m1() {
//     return 1;
// }

// async function m2() {
//     const n = await m1();
//     console.log(n);
//     return 2;
// }

// async function m3() {
//     const n = m2();
//     console.log(n);
//     return 3;
// }

// m3().then((n) => {
//     console.log(n);
// });

// m3();

// console.log(4);
// 4  1 pending
//   
// 7
// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// Promise.resolve(1).then(console.log);
// new Promise((resolve, reject) => resolve(1)).then(console.log);
// 1
// 8
// var a;
// var b = new Promise((resolve, reject) => {
//         console.log('promise1');
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     }).then(() => {
//         console.log('promise2');
//     })
//     .then(() => {
//         console.log('promise3');
//     })
//     .then(() => {
//         console.log('promise4');
//     });

// a = new Promise(async (resolve, reject) => {
//     console.log(a);
//     await b;
//     console.log(a);
//     console.log('after1');
//     await a;
//     resolve(true);
//     console.log('after2');
// });

// console.log('end');

// //   'promise1' undefined end 234 'after1'

// // 9
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');
// async1 pending
// async2 fulfilled undefined


// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout


