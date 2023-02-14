export interface User {
	_id: string;
	email: string;
	role: 'super' | 'admin' | 'staff';
	createdAt?: string;
	updatedAt?: string;
}

export interface UserLogin {
	email: string;
	password: string;
}
