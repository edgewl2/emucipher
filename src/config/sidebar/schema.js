export default [
    {
        "title": "Clásicos",
        "icon": "fas fa-user-lock",
        "submenu": "minor1",
        "path": "/algorithms/classic",
        "method": [
            {
                "title": "Sustitución",
                "icon": "fas fa-user-lock",
                "submenu": "minor1.1",
                "path": "/algorithms/classic/subst",
                "inFunctionTo": [
                    {
                        "title": "Monoalfabéticos",
                        "icon": "fas fa-user-lock",
                        "path": "/algorithms/classic/subst/monoalpha",
                    },
                    {
                        "title": "Polialfabéticos",
                        "icon": "fas fa-user-lock",
                        "path": "/algorithms/classic/subst/polyalpha",
                    }
                ]
            },
            {
                "title": "Permutación",
                "icon": "fas fa-user-lock",
                "path": "/algorithms/classic/permut",
            },
        ]
    },
    {
        "title": "Modernos",
        "icon": "fas fa-user-lock",
        "submenu": "minor2",
        "path": "/algorithms/modern",
        "keys": [
            {
                "title": "Simétricos",
                "icon": "fas fa-user-lock",
                "submenu": "minor2.1",
                "path": "/algorithms/modern/sim",
                "inFunctionTo": [
                    {
                        "title": "Flujo",
                        "icon": "fas fa-user-lock",
                        "path": "/algorithms/modern/sim/flow",
                    },
                    {
                        "title": "Bloques",
                        "icon": "fas fa-user-lock",
                        "path": "/algorithms/modern/sim/blocks",
                    },
                ]
            },
            {
                "title": "Asimétricos",
                "icon": "fas fa-user-lock",
                "submenu": "minor2.2",
                "path": "/algorithms/modern/asim",
                "inFunctionTo": [
                    {
                        "title": "Bloques",
                        "icon": "fas fa-user-lock",
                        "path": "/algorithms/modern/asim/blocks",
                    },
                ]
            },
        ],
    }
];