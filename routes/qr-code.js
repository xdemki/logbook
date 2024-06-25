const router = require("express").Router();

const { default: axios } = require("axios");
const iserv = require('iserv');

router.get("/", async (req, res) => {
    let username = "max.riese";
    let password = "Hannover78ok"
    try {
        const response = await axios.post('https://igs-garbsen.de', {
            username,
            password
        });

        return response.data; // Assuming the API returns user data
    } catch (error) {
        throw new Error(error);
    }
});

router.get("/:date/:Class/:teacher/:student", async (req, res) => {
  const data = ({ date, Class, teacher, student } = req.params);

  res.send(data);
});

module.exports = router;
