const Prices = require("../models/Prices");

const getAllServices = async (req, res) => {
  try {
    const listPricesServices = await Prices.find();

    res.json(listPricesServices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find prices List" });
  }
};

const createItemPriceService = async (req, res) => {
  try {
    const doc = new Prices({
      category: req.body.category,
      image: req.body.image,
      valueName: req.body.valueName,
      value: req.body.value,
    });

    const itemPriceService = await doc.save();

    res.json(itemPriceService);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      massage: `failed to create item Price Service ${req.body.valueName}`,
    });
  }
};

const updatePriceService = async (req, res) => {
  try {
    const itemId = req.params.id;

    const updatedItem = await Prices.findByIdAndUpdate(
      itemId,
      { value: req.body.value },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "Failed to patch update Price Service" });
  }
};

module.exports = {
  getAllServices,
  createItemPriceService,
  updatePriceService,
};
