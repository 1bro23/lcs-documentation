export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "justify-center hover:cursor-pointer bg-white",
      },
    },
    tabs: {
      slots: {
        trigger: "hover:cursor-pointer",
      },
    },
  },
});
