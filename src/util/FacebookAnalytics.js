export const fbqTrack = (event, options) => {
  window.fbq("track", event, options);
};

export const fbqPageView = () => {
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
};
