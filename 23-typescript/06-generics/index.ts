// Create a generic function getStudentInfo<T>(info: T): T that returns any type of
// student information, such as name, ID, or grade.


class StudentInfo<T> {
    info: T;

    constructor(info: T) {
        this.info = info;
    }

    getInfo(): T {
        return this.info;
    }
}


const nameInfo = new StudentInfo<string>("Rajan");
console.log(nameInfo.getInfo());

const idInfo = new StudentInfo<number>(101);
console.log(idInfo.getInfo());

const attendanceInfo = new StudentInfo<boolean>(true);
console.log(attendanceInfo.getInfo());