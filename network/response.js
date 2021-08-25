exports.sucess = function (req, res, msg, status) {
  res.status(status || 200).send({
    error: "",
    body: msg,
  });
};
exports.error = function (req, res, error, status, msg) {
  console.error(error);
  res.status(status || 500).send({
    error: msg,
    body: "",
  });
};
