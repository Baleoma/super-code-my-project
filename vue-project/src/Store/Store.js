import { defineStore } from "pinia";
import { onMounted, reactive, ref, watch, computed } from "vue";
import axios from "axios";

export const useStore = defineStore("useStore", () => {
  const items_sneaker = ref();
  const items_user = ref();
  const items_team = ref();
  const visibleDraver = ref(false);
  const visibleOrder = ref(false);
  const visibleTitle = ref(false);
  const visibleEntry = ref(true);
  const visibleRegistration = ref(false);
  const entryNavigation = ref(false);
  const name = ref();
  const entryName = ref([]);
  const email = ref();
  const password = ref();
  const entryPassword = ref([]);
  const returnPassword = ref();
  const favorites = ref([]);
  const title = ref({
    Image:
      "https://i.pinimg.com/564x/82/e1/41/82e141ec07512c1ecde40557ba418417.jpg",
    Name: "Найк Эйр Макс 270",
    Price: 8400,
    Quantity: 50,
    Title: "Легкие и комфортные кроссовки с воздушной амортизацией.",
    id: 1,
  });
  const filters = reactive({
    sortBy: "",
    sortSearch: "",
  });
  const emailRule = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
  const nameRule = /[a-zA-Z0-9._]/;
  const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]{8,}/;

  const checkUser = () => {
    fetchGetUser();
    console.log(entryNavigation.value);

    items_user.value.forEach((element) => {
      if (
        (element.name === entryName.value ||
          element.email === entryName.value) &&
        element.returnPassword === entryPassword.value
      ) {
        console.log("Вы вошли");
        return;
      }
    });
  };

  const checkValidityEntry = () => {
    entryNavigation.value = true;
    if (
      (emailRule.test(entryName.value) || nameRule.test(entryName.value)) &&
      passwordRule.test(entryPassword.value)
    ) {
      console.log("все поля верны");
      checkUser();
    } else {
      console.log("одно или все поля неверны");
    }
  };

  const checkValidityAuthorization = () => {
    if (
      nameRule.test(name.value) &&
      emailRule.test(email.value) &&
      passwordRule.test(password.value) &&
      returnPassword.value === password.value
    ) {
      fetchUser(name.value, email.value, password.value, returnPassword.value);
      console.log("Даные добавился");
    } else {
      console.log("Поля неверны");
    }
  };

  const putFavorite = (id) => {
    addToCart(id);
  };

  const changeRegistration = () => {
    //console.log("кнопки сменились")
    visibleEntry.value = !visibleEntry.value;
    visibleRegistration.value = !visibleRegistration.value;
  };

  const changeOption = (event) => {
    filters.sortBy = event.target.value;
  };

  const changeInput = (event) => {
    filters.sortSearch = event.target.value;
  };

  const changeDraver = () => {
    visibleDraver.value = !visibleDraver.value;
  };

  const changeOrder = () => {
    visibleOrder.value = !visibleOrder.value;
    visibleDraver.value = false;
  };

  const changeTitle = (Id) => {
    visibleTitle.value = true;
    title.value = items_sneaker.value[Id - 1];
  };

  const deleteTitle = () => {
    visibleTitle.value = !visibleTitle.value;
  };

  const addToCart = (Id) => {
    let exam = true;
    for (let i = 0; i < favorites.value.length; i++) {
      if (items_sneaker.value[Id - 1].id === favorites.value[i].id) {
        favorites.value.splice(i, 1);
        i--;
        exam = false;
        console.log("Элемент удалился");
      }
    }
    if (exam) {
      favorites.value.push(items_sneaker.value[Id - 1]);
      console.log("Элемент добавился");
    }
  };

  const removeToCart = (Id) => {
    let index = favorites.value.findIndex((item) => item.id === Id);
    favorites.value.splice(index, 1);
  };

  const fetchTeam = onMounted(async () => {
    try {
      const { data } = await axios.get(
        "https://b4b32c032a036748.mokky.dev/team"
      );
      items_team.value = data;
    } catch (err) {
      console.log(err);
    }
  });

  const fetchUser = async (name, email, password, returnPassword) => {
    try {
      const { data } = await axios.post(
        "https://b4b32c032a036748.mokky.dev/users",
        {
          name: name,
          email: email,
          password: password,
          returnPassword: returnPassword,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGetUser = onMounted(async () => {
    try {
      const { data } = await axios.get(
        "https://b4b32c032a036748.mokky.dev/users"
      );
      items_user.value = data;
    } catch (err) {
      console.log(err);
    }
  });

  const fetchCart = async () => {
    try {
      const params = {
        sortBy: filters.sortBy,
      };

      if (filters.sortSearch) {
        params.Name = `*${filters.sortSearch}*`;
      }

      const { data } = await axios.get(
        "https://b4b32c032a036748.mokky.dev/cart",
        {
          params,
        }
      );
      items_sneaker.value = data;
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(fetchCart);
  watch(filters, fetchCart);

  return {
    name,
    entryName,
    email,
    password,
    entryPassword,
    returnPassword,
    entryNavigation,
    visibleOrder,
    visibleDraver,
    visibleTitle,
    visibleEntry,
    visibleRegistration,
    items_team,
    items_sneaker,
    filters,
    title,
    favorites,
    fetchTeam,
    fetchGetUser,
    checkValidityEntry,
    checkValidityAuthorization,
    checkUser,
    changeDraver,
    changeInput,
    changeOption,
    changeRegistration,
    putFavorite,
    addToCart,
    deleteTitle,
    changeTitle,
    changeOrder,
    fetchCart,
    removeToCart,
  };
});
