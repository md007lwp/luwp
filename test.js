// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000)
// })

// const p2 = p1.catch((err) => {
//     console.log(err);
//     return err + 1;
// })
// setTimeout(() => {
//     console.log(p1, p2)
// }, 2000)

// function getStudents(page) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 1) {
//                 let err = new Error(`获取${page}页数据失败！`);
//                 reject(err);
//                 return;
//             }
//             const stus = new Array(10).fill(null).map((s, i) => ({
//                 id: `No.${(page-1)*10+i+1}`,
//                 name: `***`
//             }));
//             resolve(stus);

//         }, Math.floor(Math.random() * 5000));
//     })
// }
// const pNum = [getStudents(1), getStudents(2), getStudents(3)];
// const pNum = new Array(10).fill(1).map((item, index) => item = getStudents(index + 1));

// 1
// let resultData = [];
// Promise.all(pNum).then(arr => {
//     resultData = arr.reduce((df, cur) => df.concat(cur));
// }, []).catch(err => resultData = err.errors);

// Promise.all(pNum).then(data => data.flat()).catch(err => err.message);

// 2
// {status: 'fulfilled', value: Array(10)}
// {status: 'rejected', reason: Error: 获取2页数据失败！ at http://127.0.0.1:5500/test.js:19:24}
// Promise.allSettled(pNum).then(data => {
// console.log(data.filter(item => item.status === 'fulfilled').map(item => item.value).flat());
// console.log(data.map(item => {
//     if (item.status === 'fulfilled') {
//         return item.value;
//     }
//     if (item.status === 'rejected') {
//         // item = item.value
//     }
// }).flat().filter(Boolean));
//快速去除假值
// ['', null, undefined, NaN, false, 0, -0, +0].filter(Boolean);
// });
// 3
// Promise.any(pNum).then(data => console.log(data)).catch(err => console.log(err.errors));
// 4
// Promise.race(pNum).then(data => console.log(data)).catch(err => {
//     console.log(err.message)
// });

// 测试回滚