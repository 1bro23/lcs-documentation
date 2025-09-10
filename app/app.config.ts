export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "justify-center hover:cursor-pointer bg-white py-1.5",
      },
    },
    tabs: {
      slots: {
        trigger: "hover:cursor-pointer",
      },
    },
    card: {
      slots: {
        header: "bg-elevated",
      },
    },
  },
});
