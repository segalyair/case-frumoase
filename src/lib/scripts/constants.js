import Boosting from '$lib/svgs/boosting.svg?component';
import Coaching from '$lib/svgs/coaching.svg?component';
import Selling from '$lib/svgs/user-sell.svg?component';
import Users from '$lib/svgs/users.svg?component';

export const NAV_LINKS = [
    {
        label: 'Recent work',
        href: '/',
    },
    {
        label: 'FAQ',
        href: '/',
    },
    {
        label: 'Contacts',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/blog-list',
    },
];

export const MAIN_NAV_LINKS = [
    {
        label: 'Boosting',
        icon: Boosting,
        isDropdown: true,
    },
    {
        label: 'Coaching',
        icon: Coaching,
        isDropdown: true
    },
    {
        label: 'Account selling',
        icon: Selling,
        isDropdown: true
    },
    {
        label: 'Boosters',
        icon: Users,
        isDropdown: false,
        href: "/boosters"
    }
];