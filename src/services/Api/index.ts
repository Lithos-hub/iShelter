import axios, { AxiosInstance } from 'axios';

export class Api {
	public client!: AxiosInstance;
	private static instance: any;

	private constructor() {
		this.client = axios.create({
			baseURL: process.env.VITE_API_URL + '/api/v1/',
		});
		this.client.interceptors.request.use(config => {
			config.headers['x-token'] = localStorage.getItem('token');
			return config;
		});
	}

	public static getInstance(): Api {
		if (!Api.instance) {
			Api.instance = new Api();
		}

		return Api.instance;
	}

	public get get() {
		return this.client.get;
	}

	public get post() {
		return this.client.post;
	}

	public get patch() {
		return this.client.patch;
	}

	public get put() {
		return this.client.put;
	}

	public get delete() {
		return this.client.delete;
	}

	public setAuthorization() {
		const token = localStorage.getItem('token');
		if (token) {
			this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
		} else {
			this.removeAuthorization();
		}
	}

	public removeAuthorization() {
		if (this.client.defaults.headers.common?.Authorization) {
			delete this.client.defaults.headers.common?.Authorization;
		}
	}

	// HEADER WHEN UPLOADING FILES
	public setFormHeader() {
		this.client.defaults.headers.post['Content-Type'] = 'multipart/form-data';
		this.client.defaults.headers.post.Accept = 'multipart/form-data';
	}

	// HEADER WHEN ANY OTHERS REQUESTS
	public setJsonHeader() {
		this.client.defaults.headers.post['Content-Type'] = 'application/json';
		this.client.defaults.headers.post.Accept = 'application/json';
	}
}
