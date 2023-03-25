const today = new Date();
const yyyy = today.getFullYear();
let m = today.getMonth() + 1;
let d = today.getDate();

const todayDate = `${d}/${m}/${yyyy}`;

export default todayDate;
