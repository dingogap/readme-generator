// License Details

function licenseDetails(wanted) {
    const licenses = {
        Apache_2: {
            name: 'Apache 2.0',
            badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
            link: 'https://opensource.org/licenses/Apache-2.0'
        },
        GPLv2: {
            name: 'GNU GPLv2',
            badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
            link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
        },
        GPLv3: {
            name: 'GNU GPLv3',
            badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
            link: 'https://www.gnu.org/licenses/gpl-3.0'
        },
        MIT: {
            name: 'MIT License',
            badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
            link: 'https://opensource.org/licenses/MIT'
        },
        BSD2: {
            name: 'BSD 2-Clause License',
            badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
            link: 'https://opensource.org/licenses/BSD-2-Clause'
        },
        BSD3: {
            name: 'BSD 3-Clause License',
            badge: 'https://img.shields.io/badge/License-BSD_3--Clause-orange.svg',
            link: 'https://opensource.org/licenses/BSD-3-Clause'
        },
        Boost_1: {
            name: 'Boost Software License 1.0',
            badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
            link: 'https://www.boost.org/LICENSE_1_0.txt'
        },
        CC0_1: {
            name: 'Creative Commons 1.0',
            badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
            link: 'http://creativecommons.org/publicdomain/zero/1.0/'
        },
        EPL_1: {
            name: 'Eclipse Public License 1.0',
            badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
            link: 'https://opensource.org/licenses/EPL-1.0'
        },
        MPL_2: {
            name: 'Mozilla Public License 2.0',
            badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
            link: 'https://opensource.org/licenses/MPL-2.0'
        },
        NotLicensed: {
            name: 'No License Required',
            badge: '',
            link: ''
        }
    }
    if (wanted === undefined) {
        return licenses
    } else {
        return licenses.wanted
    }
}

module.exports = licenseDetails;