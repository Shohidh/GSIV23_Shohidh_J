export const getCurrentDate = () => {
    const d: Date = new Date();
    let month: string = '' + (d.getMonth() + 1);
    let day: string = '' + d.getDate();
    const year: string = d.getFullYear().toString();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
