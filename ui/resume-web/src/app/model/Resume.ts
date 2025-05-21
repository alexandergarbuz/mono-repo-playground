export class Resume {
  name: string;
  title: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  workExperience: WorkExperience[];

  constructor(
    name: string,
    title: string,
    email: string,
    website: string,
    linkedin: string,
    github: string,
    summary: string,
    workExperience: WorkExperience[]
  ) {
    this.name = name;
    this.title = title;
    this.email = email;
    this.website = website;
    this.linkedin = linkedin;
    this.github = github;
    this.summary = summary;
    this.workExperience = workExperience;
  }
}
export class WorkExperience {
  name: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];

  constructor(
    name: string,
    title: string,
    startDate: string,
    endDate: string,
    responsibilities: string[],
    achievements: string[]
  ) {
    this.name = name;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.responsibilities = responsibilities;
    this.achievements = achievements;
  }
}
