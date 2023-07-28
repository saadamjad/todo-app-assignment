/** @format */

type Time = {
	value: string;
};

type ScheduleItem = {
	date?: string;
	available: boolean;
	day: string;
	time: {
		start: Time;
		end: Time;
	};
};

type NewAppointment = {
	id?: string;
	name: string;
	email: string;
	password: string;
	schedule: ScheduleItem[];
	date: string | any;
};

type Appointment = {
	schedule?: ScheduleItem[];
};
