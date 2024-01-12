import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: '',
        icon: 'ri-home-line',
        label: 'Dashboard'
    },
    {
        routeLink: 'stationeries',
        icon: 'ri-store-3-line',
        label: 'Stationerries',
        items: [
            {
                routeLink: 'stationeries/list',
                label: 'List Stationeries',
            },
            {
                routeLink: 'stationeries/create',
                label: 'Add New Stationeries',
            }
        ]
    },
    {
        routeLink: 'category',
        icon: 'ri-list-check-2',
        label: 'Category',
        items: [
            {
                routeLink: 'category/list',
                label: 'List Category',
            },
            {
                routeLink: 'category/create',
                label: 'Add New Category',
            }
        ]
    },
    {
        routeLink: 'imports',
        icon: 'ri-list-check-2',
        label: 'Imports',
        items: [
            {
                routeLink: 'imports/list',
                label: 'List Imports',
            },
            {
                routeLink: 'imports/create',
                label: 'Add New Imports',
            }
        ]
    },
    {
        routeLink: 'import-details',
        icon: 'ri-list-check-2',
        label: 'import-details',
        items: [
            {
                routeLink: 'import-details/list',
                label: 'List import-details',
            },
            {
                routeLink: 'import-details/create',
                label: 'Add New import-details',
            }
        ]
    },
    {
        routeLink: 'requests',
        icon: 'ri-list-check-2',
        label: 'Requests',
        items: [
            {
                routeLink: 'requests/list',
                label: 'List import-details',
            },
            {
                routeLink: 'requests/create',
                label: 'Add New Requests',
            }
        ]
    },
    {
        routeLink: 'request-details',
        icon: 'ri-list-check-2',
        label: 'Request-Details',
        items: [
            {
                routeLink: 'request-details/list',
                label: 'List import-details',
            },
            {
                routeLink: 'request-details/create',
                label: 'Add New Request-Details',
            }
        ]
    },
    {
        routeLink: 'user',
        icon: 'ri-user-3-line',
        label: 'Users',
        items: [
            {
                routeLink: 'user/list',
                label: 'All users',
            },
            {
                routeLink: 'user/create',
                label: 'Add new user',
            }
        ]
    },
    {
        routeLink: 'roles',
        icon: 'ri-user-3-line',
        label: 'Roles',
        items: [
            {
                routeLink: 'roles/list',
                label: 'List Roles',
            },
            {
                routeLink: 'roles/create',
                label: 'Add New Roles',
            }
        ]
    },
    {
        routeLink: 'suppliers',
        icon: 'ri-home-line',
        label: 'Suppliers',
        expanded: false,
        items: [
            {
                routeLink: 'suppliers/create',
                label: 'Create-Suppliers',
            },
            {
                routeLink: 'suppliers/list',
                label: 'List-Suppliers'
            }
        ]
    },
    {
        routeLink: 'orders',
        icon: 'ri-archive-line',
        label: 'Order',
        items: [
            {
                routeLink: 'orders/list',
                label: 'Order List',
            },
            {
                routeLink: 'orders/detail',
                label: 'Order Detail',
            },
            {
                routeLink: 'orders/tracking',
                label: 'Order Tracking',
            }
        ]
    },
    {
        routeLink: 'Settings',
        icon: 'ri-home-line',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
    {
        routeLink: 'banner',
        icon: 'ri-image-line',
        label: 'Banner'
    },
    
];