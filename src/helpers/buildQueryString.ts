const buildQueryArray = (data: any) => {
  let queryArray = "";

  if (data && data[0] && data[1]) {
    data[1].reduce((acc: any, cur: any) => {
      queryArray = `${queryArray}${data[0]}[]=${encodeURIComponent(cur)}&`;

      return acc;
    }, {});
    queryArray = queryArray.substring(0, queryArray.length - 1);
  }

  return queryArray;
};

// tslint:disable:no-any
export const buildQueryString = (action: any): string =>
  Object.entries(action)
    .filter((w) => w[1] !== "")
    .map((k: any) =>
      Array.isArray(k[1])
        ? buildQueryArray(k)
        : `${k[0]}=${encodeURIComponent(k[1])}`
    )
    .join("&");
