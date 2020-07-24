// Mock request
// import { get } from 'httpie';

export const handler = async (event) => {
  const { collection, slug } = event.queryStringParameters;
  let obj;

  try {
    // const { data } = await get(``);

    obj = { collection, slug };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data: obj }),
  };
};
