// Створіть у файлі src/utils/ctrlWrapper.js і застосуйте у файлі src/routers/contacts.js функцію ctrlWrapper,
// яка діятиме як обгортка для контролерів у вашому Express - додатку, для автоматичної обробки помилок, що можуть
// виникнути під час виконання запитів.В цій обгортці при виникненні помилки викличте next(err) для залучення middleware
// errorHandler

const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
