import { activeHandler, countHandler } from "coral-server/app/handlers";

import { createAPIRouter } from "./helpers";

export function createStoryRouter() {
  // TODO: (cvle) make caching time configurable?
  const router = createAPIRouter({ cache: "2m" });

  router.get("/count.js", countHandler());
  router.get("/active.js", activeHandler());

  return router;
}
