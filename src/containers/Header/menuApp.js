export const adminMenu = [
    { //hệ thống
        name: 'menu.system.header', menus: [
            {
                name: 'menu.system.system-administrator.header', link: '/system/dashboard', icon: 'fas fa-home me-1',
            },
            { 
                name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage', icon: 'fas fa-users me-1',
            },
            { 
                name: 'menu.system.system-administrator.doctor-manage', link: '/system/doctor-manage', icon: 'fas fa-briefcase-medical me-1',
            },
            { 
                name: 'menu.system.system-administrator.user-manage', link: '/system/user-redux', icon: 'fas fa-wrench me-1' 
            },
            { 
                name: 'menu.system.system-administrator.clinic', link: '/system/user-redux', icon: 'fas fa-hospital-alt me-1'
            },
            { 
                name: 'menu.system.system-administrator.specialist', link: '/system/user-redux', icon: 'fas fa-suitcase me-1'
            },
            { 
                name: 'menu.system.system-administrator.blog', link: '/system/user-redux', icon: 'fab fa-blogger me-1',
            },
        ]
    },
];