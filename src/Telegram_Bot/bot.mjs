import axios from 'axios';

const botToken = "7716014519:AAFB5XdsTar9a_jkMNIa5Yu-Ck3hkra5eUs";
const chatId = "6287309235";  

const sendMessageWithButton = async () => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const inlineKeyboard = {
    inline_keyboard: [
      [
        {
          text: "Tasdiqlash", 
          callback_data: "confirm_rent",
        },
      ],
    ],
  };

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: "Ijarangizni tasdiqlaysizmi?", 
      reply_markup: inlineKeyboard, 
    });
    console.log("Xabar yuborildi va tugma qo'shildi!");
  } catch (error) {
    console.error("Xatolik:", error);
  }
};


sendMessageWithButton();
