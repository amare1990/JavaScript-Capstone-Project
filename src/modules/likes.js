// curl -X POST -d 'name -Amare' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps to create API ID

const clickLoveBtn = async (menuId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: menuId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  return responseText;
};

const getNumberOfLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes');
  const responseJSON = await response.json();
  return responseJSON;
};

export { clickLoveBtn, getNumberOfLikes };
