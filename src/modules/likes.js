// curl -X POST -d 'name -Amare' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps to create API ID

const clickLoveBtn = async (itemId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const getNumberOfLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCijE8yJ7svuzQLIyTFd/likes');
  const responseText = await response.text();
  return responseText;
};

export { clickLoveBtn, getNumberOfLikes };
