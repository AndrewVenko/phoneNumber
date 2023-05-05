export default function cleanPhoneNumber(phoneNumber) {
  // Удаление всех символов, кроме цифр
  const cleaned = phoneNumber.replace(/\D/g, '');

  // Проверка на международный номер и добавление +7 или + другой код страны
  if (cleaned.length === 11 && cleaned[0] === '8') {
    return `+7${cleaned.slice(1)}`;
  } if ((cleaned.length === 11 && cleaned[0] === '7') || (cleaned.length === 12)) {
    return `+${cleaned}`;
  }
  // Неверный формат номера
  throw new Error('Неверный формат номера телефона');
}
