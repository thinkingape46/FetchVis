function currentDate() {
  let year = new Date().getFullYear();
  let month =
    new Date().getMonth() + 1 > 9
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`;
  let dayMonth =
    new Date().getDate() > 9
      ? new Date().getDate()
      : `0${new Date().getDate()}`;
  return `${year}-${month}-${dayMonth}`;
}

export default currentDate;
