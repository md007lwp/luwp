class FieldValidator {
    constructor(elem, validatorFun) {
        this.self = elem;
        this.errElement = this.self.nextElementSibling;
        this.validatorFun = validatorFun;
        this.self.onblur = () => {
            this.validate();
        }
    }
    /**
     * 验证方法
     */
    async validate() {
        const errMsg = await this.validatorFun();
        if (errMsg) {
            this.errElement.innerText = errMsg;
            return false;
        } else {
            this.errElement.innerText = '';
            return true;
        }

    }
    static async validateAll(...validates) {
        const reply = validates.map(v => v.validate());
        const resp = await Promise.all(reply);
        return resp.every(r => r)
    }
}

