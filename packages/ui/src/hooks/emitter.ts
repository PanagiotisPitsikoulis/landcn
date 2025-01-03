import mitt from "mitt";

type Events = {
  bannerVisibilityChange: "hidden" | "visible";
};
/**
 * Event emitter for the application.
 */
const emitter = mitt<Events>();

export default emitter;
