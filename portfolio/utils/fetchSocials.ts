import { Social } from "../typings";

export const fetchSocial = async () => {
  let res;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  } catch (error) {
    return [] as Social[];
  }
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
