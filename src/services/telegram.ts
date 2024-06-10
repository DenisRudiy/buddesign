const baseUrl = "https://api.telegram.org//";

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=-&text=${message}`;

  console.log(message);
  const response: Response = await fetch(url);

  console.log("response", response);
};
