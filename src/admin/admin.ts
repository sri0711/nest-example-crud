interface AdminPersonalDetails {
	age?: number;
	gender?: string;
	dob?: string;
}

export interface AdminInterface {
	user_id: string;
	name: string;
	mobile: string;
	personal_details?: AdminPersonalDetails;
	password: string;
}

export interface AdminQuery {
	user_id?: string;
	name?: string;
	mobile?: string;
	personal_details?: AdminPersonalDetails;
	password?: string;
}
