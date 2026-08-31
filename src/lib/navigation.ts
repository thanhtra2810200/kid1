export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'GIỚI THIỆU', to: '/gioi-thieu' },
  { label: 'CHƯƠNG TRÌNH HỌC', to: '/chuong-trinh-hoc' },
  { label: 'ĐỘI NGŨ', to: '/gioi-thieu#doi-ngu' },
  { label: 'KẾT QUẢ', to: '/gioi-thieu#ket-qua' },
  { label: 'HOẠT ĐỘNG', to: '/gioi-thieu#hoat-dong' },
  { label: 'LIÊN HỆ', to: '/gioi-thieu#lien-he' },
];

export const trialLink = '/dang-ky-hoc-thu';
