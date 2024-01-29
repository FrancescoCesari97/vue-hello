//* STRUTTUTA BASE VUE

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      greetings: "Hello Evreyone!!",

      fire: "https://www.superiorfireplaces.co.uk/wp-content/uploads/2020/02/inglenook-fireplace.jpg",
    };
  },
});

app.mount("#root");
