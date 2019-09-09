/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/';
const API_TOKEN = `Bearer ${sessionStorage.getItem('authToken')}`;

class ClientHTTP {
  constructor(endpoint) {
    this.client = axios.create({
      baseURL: endpoint,
      timeout: 10000,
    });
  }

  async get(url, params) {
    return await this.request(url, { method: 'GET', params });
  }

  async post(url, data) {
    return await this.request(url, { method: 'POST', data });
  }

  async patch(url, data) {
    return await this.request(url, { method: 'PATCH', data });
  }

  async put(url, data) {
    return await this.request(url, { method: 'PUT', data });
  }

  async delete(url, data) {
    return await this.request(url, { method: 'DELETE', data });
  }

  async request(url, config) {
    const headers = await this.getHeaders();
    const result = await this.client({ url, ...config, headers });
    return result;
  }

  async getHeaders() {
    if (!API_TOKEN) return axios.defaults.headers;
    return {
      ...axios.defaults.headers,
      Authorization: API_TOKEN,
    };
  }
}

export const apiClient = new ClientHTTP(API_URL);
