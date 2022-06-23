import commonFields from '../commomFields';
export default {
  name: '',
  fields: {
    name: 'Tên',
    prefix: 'Tiền tố',
    fullName: 'Tên đầy đủ',
    code: 'Mã',
    population: 'Dân số',
    countryId: 'Quốc gia',
    provinceId: 'Tỉnh / Thành phố',
    districtId: 'Quận / Huyện',
    position: 'Vị trí trung tâm',
    applyFor: 'Áp dụng cho',
    issuedDate: 'Ngày ban hành',
    issuedOrg: 'Tổ chức ban hành',
    isInValid: 'Còn hiệu lực',
    description: 'Mô tả',
    paramItemList: 'Danh sách tham số',
    sourcecreport: 'Nguồn nước thô',
    processingcreport: 'Nước trong quá trình xử lý',
    freshcreport: 'Nước sạch sau xử lý',
    processingAndFreshcreport: 'Nước sinh hoạt',
    creportParameterId: 'Tên thông số',
    symbol: 'Ký hiệu hóa học',
    measureUnit: 'Đơn vị đo',
    value: 'giá trị',
    creportStage: 'Áp dụng cho',
    all: 'Tất cả',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};
