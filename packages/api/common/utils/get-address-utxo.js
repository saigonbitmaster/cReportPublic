//given address and an amount, check if address has enough amount of ADA to perform the bid, return: {value: 1000, isEnough: true}

const project_id = process.env.BLOCKFROST_PROJECT_ID;
const blockfrost_url = process.env.BLOCKFROST_URL;
const axios = require('axios');

/* 
let project_id = "testnetIfDtKzgYc9g9JoYya8rIcc6JclEhn82F";
let address = "addr_test1qrsyt5qv7pvdcqf9thpmjyv6kukpqv4nmr3tqjy6k6tm6705dl4czkn5ap78f35r0q8yudwazghgqdcad4sx2srew9vqe7c7lv";
let blockfrost_url = 'https://cardano-testnet.blockfrost.io/api/v0' */
async function get_proposal_utxos(address, tx_hash) {
  let result = { utxos: null, tx_hash_utxo: null };
  await axios({
    url: `${blockfrost_url}/addresses/${address}/utxos`,
    method: 'GET',
    headers: {
      project_id: project_id,
    },
  })
    .then(response => {
      result.utxos = response.data;
    })
    .catch(error => error);

  //check tx_hash, that show input and output UTXOs
  //to check the value that send from address a to address b, check address UTXOs -> get transaction_id -> get transaction_id utxos
  //let tx_hash ='2b42c4afac849ebde0cbee6c2279327bdc0a1ff2dd07a78dc9e7c3aab601d166'
  await axios({
    url: `${blockfrost_url}/txs/${tx_hash}/utxos`,
    method: 'GET',
    headers: {
      project_id: project_id,
    },
  })
    .then(response => {
      result.tx_hash_utxo = response.data;
    })
    .catch(error => error);

  return result;
}

/* get_proposal_utxos('addr_test1qrsyt5qv7pvdcqf9thpmjyv6kukpqv4nmr3tqjy6k6tm6705dl4czkn5ap78f35r0q8yudwazghgqdcad4sx2srew9vqe7c7lv', '2b42c4afac849ebde0cbee6c2279327bdc0a1ff2dd07a78dc9e7c3aab601d166')
.then(result => console.log(result));
 */

module.exports = { get_proposal_utxos };
