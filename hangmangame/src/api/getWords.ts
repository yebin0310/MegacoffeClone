import axios from "axios";

const getWords = async () => {
  try {
    const res = await axios.get(
      "https://random-words5.p.rapidapi.com/getRandom",
      {
        headers: {
          "X-RapidAPI-Key":
            "c08ef39477msh67f9323b825dff4p10b080jsn6f1e7837a48e",
          "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
        },
      }
    );
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다");
  }
};

export default getWords;
