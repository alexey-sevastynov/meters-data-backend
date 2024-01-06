const MetersData = require("../models/MetersData");

const getAllMetersData = async (req, res) => {
  try {
    const listMetersData = await MetersData.find();

    res.json(listMetersData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find meters data list" });
  }
};

const getOneMeterData = async (req, res) => {
  try {
    const id = req.params.id;

    MetersData.findById(id)
      .then((doc) => res.json(doc))
      .catch((err) =>
        res.status(414).json({ message: `failed to find meter data: ${err}` })
      );
  } catch (error) {
    res.status(500).json({ massage: `failed to find meter data: ${error}` });
  }
};

const createMeterData = async (req, res) => {
  try {
    const doc = new MetersData({
      date: req.body.date,
      address: req.body.address,
      light: req.body.light,
      lightDay: req.body.lightDay,
      lightNight: req.body.lightNight,
      gas: req.body.gas,
      water: req.body.water,
    });

    const meterData = await doc.save();

    res.json(meterData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      massage: `failed to create meter data`,
    });
  }
};

const updateMeterData = async (req, res) => {
  try {
    const ItemId = req.params.id;
    MetersData.updateOne(
      { _id: ItemId },
      {
        date: req.body.date,
        address: req.body.address,
        light: req.body.light,
        lightDay: req.body.lightDay,
        lightNight: req.body.lightNight,
        gas: req.body.gas,
        water: req.body.water,
      }
    )
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(414).json({ message: `failed to patch update Meter Data` });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to patch update Meter Data" });
  }
};

const removeMeterData = async (req, res) => {
  try {
    const meterDataId = req.params.id;

    MetersData.findOneAndDelete({ _id: meterDataId })
      .then((doc) => res.json({ ...doc, message: `delete id:${meterDataId}` }))
      .catch((err) =>
        res.status(414).json({ message: "failed to delete meter data" })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to delete meter data" });
  }
};

module.exports = {
  getAllMetersData,
  createMeterData,
  getOneMeterData,
  updateMeterData,
  removeMeterData,
};
