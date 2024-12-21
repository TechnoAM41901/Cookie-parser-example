module.exports = {
    setCookie: (req, res) => {
      const { name, value } = req.body;
      res.cookie(name, value, { maxAge: 900000, httpOnly: true });
      res.json({ msg: 'Cookie has been set' });
    },
    getCookie: (req, res) => {
      const { name } = req.params;
      const value = req.cookies[name];
      res.json({ value });
    }
  };
  