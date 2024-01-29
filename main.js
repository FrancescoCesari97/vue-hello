//* STRUTTUTA BASE VUE

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      greetings: "Hello Evreyone!!",
    };
  },
});

app.mount("#root");
