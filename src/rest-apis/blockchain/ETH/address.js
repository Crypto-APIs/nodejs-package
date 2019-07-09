class LTCAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    generateEthereumAccount(network, password) {
        return this.request.post(this.basePath + network + '/account', {
            password: password
        });
    }

    // TODO: Missing endpoint for nonce (on doc is the same as GET /v1/bc/eth/${NETWORK}/address/${ADDRESS}

}

module.exports = LTCAddress;