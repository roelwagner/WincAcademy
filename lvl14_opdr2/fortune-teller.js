let tellFortune = function (
  numberOfChildren,
  partnerName,
  geoLocation,
  jobTitle
) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    " with " +
    numberOfChildren +
    " kids.";
  console.log(future);
};
tellFortune(2, "Britta", "Rotterdam", "Front-end Developer");
tellFortune(4, "Bernadette", "Paramaribo", "Back-end Developer");
tellFortune(7, "Ilse", "Zutphen", "Bloemist");
