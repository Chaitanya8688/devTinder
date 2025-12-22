const adminauth = (req, res, next) => {
  console.log("admin auth is getting checked in")
  const token = "xyz";
  const isadminAuthorized = token === "xyz";
  if(!isadminAuthorized) {
      res.status(401).send("unauthorized data");
    } else{
      next();
    }

};

const userauth = (req, res, next) => {
  console.log("admin auth is getting checked in")
  const token = "xyz";
  const isadminAuthorized = token === "xyz";
  if(!isadminAuthorized) {
      res.status(401).send(" in unauthorized data");
    } else{
      next();
    }

};

module.exports = {
  adminauth,
  userauth,
}