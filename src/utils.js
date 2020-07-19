import { createHash } from 'crypto';

const requestHelper = (() => {

function createHashForApi(ts, privkey, pubkey) {
  var preHash = ts + privkey + pubkey
    , hash    = createHash('md5').update(preHash).digest('hex');

  return hash;
}

return {
    createHashForApi,
  };

})();

export default requestHelper;