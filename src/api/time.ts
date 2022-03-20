export class TodoDate extends Date {
  public static readonly MONTHS: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public static readonly DAYS: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  static getWeekDayOf = (today: TodoDate) => TodoDate.DAYS[today.getDay()];

  static getTodayMessage = () => {
    const today = new Date();

    return `${(TodoDate.MONTHS)[today.getMonth()]} `
      + `${today.getDate()}, `
      + `${today.getFullYear()}`;
  };
}
