export interface RequestOptions {
  baseUrl?: string;
  platform?: {
    name?: string;
    version?: string;
  };
  auth?: {
    username?: string;
    password?: string;
  };
}

export interface RequestParams {
  baseURL?: string | undefined;
  headers?: any;
  withCredentials?: boolean;
  auth?: {
    username: string;
    password: string;
  };
}
