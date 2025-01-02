export function convertApiDate(date: string): string {
    const parts = date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function convertUserDate(date: string): string {
    return convertApiDate(date.slice(0, 10));
}

export function splitArray<T>(arr: T[], chunkSize: number): Array<T[]> {
    const res: Array<T[]> = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        res.push(arr.slice(i, i + chunkSize));
    }
    return res;
}

export function makeIdString(id: number): string {
    let s: string = "000000";
    s += id.toString();
    return "#" + s.slice(s.length - 6);
}
