import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  let res;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  } catch (error) {
    return {} as PageInfo;
  }
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  console.log(pageInfo);
  return pageInfo;
};
