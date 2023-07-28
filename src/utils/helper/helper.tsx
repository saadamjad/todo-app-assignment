/** @format */


export const checkIsTeacherAvailale = (users: isTypeObject, email: string) => {
	if (!users && !email) {
		return '';
	}
	return users?.teachers?.some((e: any) => e?.email == email);
};

export const checkStudentAvailale = (users: isTypeObject, email: string) => {
	if (!users && !email) {
		return '';
	}
	return users?.students?.some((e: any) => e?.email == email);
};

export const generateRandomNumberId = (length = 8) => {
	const min = Math.pow(10, length - 1);
	const max = Math.pow(10, length) - 1;
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const findTeacherDataByEmail = (users: isTypeObject, email: string) => {
	if (!users && !email) {
		return '';
	}
	return users?.teachers?.find((e: any) => e?.email == email);
};

export const findStudentDataByEmail = (users: isTypeObject, email: string) => {
	if (!users && !email) {
		return '';
	}
	return users?.students?.find((e: any) => e?.email == email);
};

export const getTimeFromDate = (value: isTypeObject) => {
	const utcDate = new Date(value);

	const targetTimeZone = 'America/New_York';

	const options: any = {
		timeZone: targetTimeZone,
		// hour12: true,
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};

	const convertedTime = utcDate.toLocaleString('en-US', options);

	return convertedTime;
};

export const getDayNameFromDate = (value: isTypeObject) => {
	const date = new Date(value);

	const options: isTypeObject = {
		weekday: 'long',
	};

	const dayName = date?.toLocaleString('en-US', options).split(',')[0];

	return dayName;
};

export function generateId(): string {
	return Math.random().toString();
}
