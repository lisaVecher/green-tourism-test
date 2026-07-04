import { travellerModel } from "../models/traveller.js";

export const getTravellers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 12;

    const skip = (page - 1) * perPage;

    const [travellers, totalItems] = await Promise.all([
      travellerModel
        .find({}, "_id name avatarUrl articlesAmount")
        .sort({ articlesAmount: -1, name: 1 })
        .skip(skip)
        .limit(perPage),
      travellerModel.countDocuments(),
    ]);

    const totalPages = Math.ceil(totalItems / perPage);

    res.json({
      data: travellers,
      page,
      perPage,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    });
  } catch (error) {
    next(error);
  }
};

export const getTopTravellers = async (req, res, next) => {
  try {
    const travellers = await Traveller.find(
      {},
      "_id name avatarUrl articlesAmount",
    )
      .sort({ articlesAmount: -1, name: 1 })
      .limit(12);

    res.json({
      data: travellers,
    });
  } catch (error) {
    next(error);
  }
};
