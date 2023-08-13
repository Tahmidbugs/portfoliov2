import { Experience } from "../typings";

export const fetchExperiences = async () => {
  let res;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    console.log("fetched experiences from ", `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, " successfully", res.json);
  } catch (error) {
    console.log("error fetching experiences", `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, error)
    return [];
  }

  const data = await res.json();
  const experiences: Experience[] = data.experiences;


  return experiences;
};
