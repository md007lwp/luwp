const API = (() => {
    const BaseUrl = 'https://study.duyiedu.com';
    async function reg(userInfo) {
        const result = await newAjax.post(BaseUrl + '/api/user/reg', userInfo);
        localStorage.setItem('authorization', result.headers.get('authorization'));
        return await result.json();
    }
    async function login(userInfo) {
        const result = await newAjax.post(BaseUrl + '/api/user/login', userInfo);
        localStorage.setItem('authorization', result.headers.get('authorization'));
        return await result.json();
    }

    async function sendChat(content) {
        const result = await newAjax.post(BaseUrl + '/api/chat', {
            content
        });
        return await result.json();
    }

    async function profile() {
        const result = await newAjax.get(BaseUrl + '/api/user/profile');
        return await result.json();
    }
    async function exists(loginId) {
        const result = await newAjax.get(BaseUrl + '/api/user/exists' + '?loginId=' + loginId);
        return await result.json();
    }
    async function getHistory() {
        const result = await newAjax.get(BaseUrl + '/api/chat/history');
        return await result.json();
    }

    return {
        reg,
        login,
        sendChat,
        profile,
        exists,
        getHistory
    }


    // myAjax({
    //     type: 'POST',
    //     url: BaseUrl + '/api/user/login',
    //     data: JSON.stringify({
    //         loginId: 'haha',
    //         loginPwd: '123123'
    //     })
    // });


    // login({
    //     loginId: 'bd124',
    //     loginPwd: '123123'
    // });
    // sendChat("11111111");
    // getHistory();

    // {"code":0,"msg":"","data":{"id":"627b98efd228ee0abf458165","loginId":"haha","nickname":"哈哈"}}
    // {"code":0,"msg":"","data":{"id":"6823170c5f8cc70c8a45e7ea","loginId":"bd123","nickname":"bug1"}}
    // {"code":0,"msg":"","data":{"id":"6823170c5f8cc70c8a45e7ea","loginId":"bd123","nickname":"bug1"}}
    // {"code":0,"msg":"","data":{"id":"682317745f8cc70c8a45e811","loginId":"bd124","nickname":"bug1"}}
    // reg({
    //     loginName: 'bd124',
    //     nickName: 'bug1',
    //     pwd: '123123'
    // });

    // exists('haha');
    // 校验id测试
    // let p1 = myAjax({
    //     url: 'https://study.duyiedu.com/api/user/exists',
    //     data: 'loginId=bd124',
    //     rqsHeader: new Map([
    //         ['Content-type', 'application/json']
    //     ])
    // })
    //登录测试
    // myAjax({
    //     type: 'POST',
    //     url: 'https://study.duyiedu.com/api/user/login',
    //     data: JSON.stringify({
    //         loginId: 'haha',
    //         loginPwd: '123123'
    //     }),
    //     rqsHeader: new Map([
    //         ['Content-type', 'application/json']
    //     ])
})();