const { hash: namehash } = require('eth-ens-namehash')

const APPS = [
  { name: 'agent', contractName: 'Agent' , contentURI: 'QmXCZCh1SzGLPHtJPJfQkR4u9fENhw6qGEUPR4RUTVGwxR'},
  { name: 'vault', contractName: 'Vault' , contentURI: 'QmYZpZ7tNzHmcqZbALcMxp53Tzub3P7NNgitoMa92D6gbD'},
  { name: 'voting', contractName: 'Voting', contentURI: 'Qmccgx6B4GyBv1RmaY2r9Tymj32ZVerKDAw6thbT3rsK1y'},
  { name: 'survey', contractName: 'Survey' , contentURI: ''},
  { name: 'payroll', contractName: 'Payroll' , contentURI: ''},
  { name: 'finance', contractName: 'Finance', contentURI: 'QmRAJxYyiWz4HqLoUWpwCfouh3v3CUp8VzF7GLrWVzSoFE' },
  { name: 'token-manager', contractName: 'TokenManager' },
]

const APP_IDS = APPS.reduce((ids, { name }) => {
  ids[name] = namehash(`${name}.aragonpm.eth`)
  return ids
}, {})

module.exports = {
  APPS,
  APP_IDS,
}
