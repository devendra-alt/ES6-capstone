const involvementApiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB';

const displayLikes = async (id) => {
  try {
    const res = await fetch(`${involvementApiURL}/likes`);
    if (!res.ok) {
      throw new Error('error getting likes to display');
    }
    const data = await res.json();
    let result = 0;
    await data.forEach((element) => {
      if (element.item_id === id) {
        result = element.likes;
      }
    });
    return result;
  } catch (error) {
    throw new Error('error getting likes to display');
  }
};

const getLikes = async () => {
  try {
    const res = await fetch(`${involvementApiURL}/likes`);
    if (!res.ok) {
      throw new Error('error getting likes to display');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { displayLikes, getLikes };
