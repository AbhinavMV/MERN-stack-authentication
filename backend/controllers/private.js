exports.getPrivateData = (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: "Private Album",
  });
};
