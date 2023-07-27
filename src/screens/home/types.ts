interface TeacherData {
  id: string;
  name: string;
  email: string;
  password: string;
  schedule: {
    day: string;
    time: {
      start: {
        value: string;
        meridian: string;
      };
      end: {
        value: string;
        meridian: string;
      };
    };
  }[];
  available: boolean;
}

interface Appointment {
  id: string;
  teacher: TeacherData;
  appointmentTime: string;
}
