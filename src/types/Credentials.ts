export interface LoginFormModel {
	username: string;
	password: string;
}

export interface RegisterFormModel {
	username: string;
	email: string;
	password: string;
}

export interface User {
	id: number;
	username: string;
}
