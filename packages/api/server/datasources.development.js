const S3_KEY = process.env.S3_KEY;
const S3_SECRET = process.env.S3_SECRET;
const S3_BUCKET = process.env.S3_BUCKET;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASS
const MONGO_HOST = 'localhost';
const REDIS_HOST = 'localhost';
const mongoConfig = name => ({
  name,
  url: `mongodb://admin:${process.env.PASSWORD}@${MONGO_HOST}:27017/${name}?authSource=admin&authMechanism=SCRAM-SHA-256`,
  connector: 'mongodb',
  useNewUrlParser: 'true',
  enableGeoIndexing: true,
  allowExtendedOperators: true,
  useUnifiedTopology: true,
});
const s3Config = (name, prefix) => ({
  name,
  connector: 'loopback-storage-aws',
  provider: 'amazon',
  key: S3_SECRET,
  keyId: S3_KEY,
  bucket: S3_BUCKET,
  options: {
    prefix,
  },
});

const email = {
  name: "email",
  connector: "mail",
  transports: [{
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD
    }
  }]
}
const dts = {
  email: email,
  cReportSystem: mongoConfig('cReportSystem'),
  cReportData: mongoConfig('cReportData'),
  redis: {
    host: REDIS_HOST,
    port: 6379,
    url: '',
    password: '',
    name: 'redis',
    db: 1,
    connector: 'kv-redis',
  },
  sourceStorage: s3Config('sourceStorage', 'SourceFiles'),
  transient: {
    name: 'transient',
    connector: 'transient',
  }
};

// eslint-disable-next-line no-console
console.log('development', dts.cReportData.url);
module.exports = dts;
