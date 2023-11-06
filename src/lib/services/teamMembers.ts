import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { buildPicture } from '$lib/scripts/picture';
import type { TeamMember } from '@customTypes/team-member';

export async function getTeamMembers(fetch: any) {
    const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
    try {
        const response = await fetch(`${DIRECTUS_API_URL}/items/teamMembers?fields=*.*.*`, {
            headers
        });
        if (response.ok) {
            const { data } = await response.json() as { data: TeamMember[] };
            return data.map((t) => ({
                ...t,
                picture: buildPicture(t.image.id, '300px', t.image.title, ['avif', 'webp'], ['300'])
            }));
        }
    } catch {
        return [];
    }
}
