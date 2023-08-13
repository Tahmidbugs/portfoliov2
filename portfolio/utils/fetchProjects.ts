import { Project } from "../typings";

export const fetchProjects = async () => {
  let res;

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  } catch (error) {
    return [] as Project[];
  }

  const data = await res.json();
  const projects: Project[] = data.projects;


  return projects;
};
