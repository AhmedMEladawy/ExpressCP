function verifyTime(req, res, next) {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send(
      "The web application is only available during working hours (Monday to Friday, from 9 to 17)."
    );
  }
}

module.exports = verifyTime;
