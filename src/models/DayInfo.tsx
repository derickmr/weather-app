export class DayInfo {
    id: number;
    dayInTheWeek: string;
    rainChance: number;
    feelsLike: {
        day: number,
        evening: number,
        morning: number,
        night: number
    };
    temperature: {
        day: number,
        evening: number,
        max: number,
        min: number,
        morning: number,
        night: number
    }
    weather: {
        main: string,
        icon: string
    }
}
