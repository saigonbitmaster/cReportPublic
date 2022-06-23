import { CUSTOM } from 'creport-lib';

export default async dataProvider => {
  let total = null;
  await dataProvider(CUSTOM, 'creportSources', {
    subUrl: 'dashboard',
    method: 'get',
    query: { mode: 'notify' },
  }).then(res => {
    if (res) {
      total = res.data.map(item => item.alertRecord.totalAlert.length).reduce((a, b) => a + b, 0);
    }
  });
  return total;
};
