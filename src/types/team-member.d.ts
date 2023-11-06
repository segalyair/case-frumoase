import type { Picture } from "./picture";

export type TeamMember = {
    name: string;
    role: string;
    image: { id: string, title: string };
    picture?: Picture;
}