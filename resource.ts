import type { Mux } from './index';

export class APIResource {
  protected client: Mux;
  constructor(client: Mux) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Mux['get'];
  protected post: Mux['post'];
  protected patch: Mux['patch'];
  protected put: Mux['put'];
  protected delete: Mux['delete'];
  protected getAPIList: Mux['getAPIList'];
}
