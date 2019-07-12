const BaseAddress = require('../../../common/blockchain/base-address');

class BTCAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    getInfoMultisig(network, address, limit = 50) {
        return this.request.get(this.basePath + network + '/address/' + address + '/multisig?limit=' + limit);
    }
}

module.exports = BTCAddress;
