export interface loginForm {
  email: any;
  password: any;
}
export interface User {
  id: number;
  name: string;
  email: string;
  role: string; // 'admin' or 'user'
  status: 'active' | 'inactive';
}

export interface Role {
  name: string;
  permissions: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
}
