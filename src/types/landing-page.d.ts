import type { Picture } from "./picture";
import type { Project } from "./project";
import type { TeamMember } from "./team-member"

export type LandingPage = {
    landingPicture: Picture;
    projects?: Project[];
    teamMembers?: TeamMember[];
}