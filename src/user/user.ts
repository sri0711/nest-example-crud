interface UserPersonalDetails {
	age?: number;
	gender?: string;
	dob?: string;
}

export interface UserInterface {
	user_id: string;
	name: string;
	mobile: string;
	personal_details?: UserPersonalDetails;
	password: string;
}
