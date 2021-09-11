module.exports = {
  someSidebar: {
    General: [
        'general/requirements',
        {
            type: 'category',
            label: 'Installation',
            items: [
                'general/installation/gui',
                {
                    type: 'category',
                    label: 'Raspberry Pi 4',
                    items: [
                        'general/installation/raspberry-pi-4/environment',
                        'general/installation/raspberry-pi-4/scripts',
                    ],
                },
                {
                    type: 'category',
                    label: 'Docker',
                    items: [
                        'general/installation/docker/information',
                        'general/installation/docker/windows-known-issues',
                    ],
                },
                'general/installation/linux',
                'general/installation/windows',
                'general/installation/general',
            ],
        },
        'general/first-usage',
        'general/known-issues',
        'general/tech-stack',
        'general/guide-mode',
    ],
    Technical: [
        "technical/development-mode",
        "technical/folders-structure",
        {
            type: 'category',
            label: 'Adding Module',
            items: [
                'technical/adding-module/backend',
                'technical/adding-module/frontend'
            ],
        },
        "technical/adding-menu-element",
        "technical/ajax-form-submission",
        {
            type: 'category',
            label: 'Actions',
            items: [
                "technical/actions/general",
                "technical/actions/binding-in-templates",
                "technical/actions/js-actions-handling",
            ],
        },
        "technical/content-re-loading",
        {
            type: 'category',
            label: 'Special functionality',
            items: [
                "technical/special-functionality/lock-mechanism",
                "technical/special-functionality/session",
            ],
        },
        {
            type: 'category',
            label: 'Composer & Commands',
            items: [
                "technical/composer-commands/commands",
                "technical/composer-commands/composer",
            ],
        },
        "technical/search-files-tags",
    ],
    Integration: [
        "integration/notifier-proxy-logger",
        "integration/personal-management-system-io",
    ],
    Summary: [
        "summary/contributors",
        "summary/question-answers",
        "summary/about-me",
    ]
  },
};
