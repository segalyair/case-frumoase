import type { BlogArticle } from "./blogArticle";
import type { Picture } from "./picture";
import type { Project } from "./project";
import type { TeamMember } from "./team-member"

export type LandingPage = {
    landingPictures: Picture[];
    projects?: Project[];
    blogPosts?: BlogArticle[];
    teamMembers?: TeamMember[];
}