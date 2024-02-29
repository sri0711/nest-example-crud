interface responder {
	success: boolean;
	message: string;
	data?: object;
	status_code: number;
}

interface errorResponse {
	message: string;
	status: number;
}

interface result {
	error?: errorResponse;
	message?: string;
	data?: object;
	status?: number;
}

export default (res: any, result: result): responder => {
	if (result?.error) {
		res.statusCode = result?.error?.status || 500;
		return res.send({
			success: false,
			message: result?.error?.message,
			status_code: result?.error?.status || 500
		});
	} else {
		res.statusCode = result?.error?.status || 200;
		return res.send({
			success: true,
			message: result?.message,
			data: result?.data,
			status_code: result?.status || 200
		});
	}
};
