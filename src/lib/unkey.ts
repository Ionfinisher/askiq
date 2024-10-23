import { Ratelimit } from "@unkey/ratelimit";

const unkey = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY!,
  duration: "10s",
  limit: 2,
  namespace: "askiq",
  async: true,
});

export default unkey;
