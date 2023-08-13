import { Skill } from "../typings";

export const fetchSkills = async () => {
  let res;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  } catch (error) {
    return [] as Skill[];
  }
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
