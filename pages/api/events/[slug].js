import { events } from "./data.json";

export default (req, res) => {
  const event = events.find((event) => event.slug === req.query.slug);
  res.status(200).json(event);
};
