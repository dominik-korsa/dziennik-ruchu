import {Config} from "./common.ts";

const defaultConfig: Config = {
    minPageCount: 14,
    district: '',
    station: '',
    checkpoint: '',
    checkpointType: 'unset',
    leftRoute: {
        isExternal: true,
        short: '',
        target: '',
        type: 'unset',
        awayIncreasing: null,
    },
    rightRoute: {
        isExternal: true,
        short: '',
        target: '',
        type: 'unset',
        awayIncreasing: null,
    },
};

const zernikiConfigs: Config[] = [
    {
        minPageCount: 14,
        district: 'Fikcyjny Zakład Linii Kolejowych',
        station: 'Żerniki',
        checkpoint: 'Że',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: true,
            short: 'WB',
            target: '',
            type: 'szlak',
            awayIncreasing: true,
        },
        rightRoute: {
            isExternal: true,
            short: 'Ol',
            target: '',
            type: 'szlak',
            awayIncreasing: false,
        },
    },
    {
        minPageCount: 10,
        district: 'Fikcyjny Zakład Linii Kolejowych',
        station: 'Żerniki',
        checkpoint: 'Że',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: true,
            short: 'WBT',
            target: '',
            type: 'szlak',
            awayIncreasing: true,
        },
        rightRoute: null,
    },
];

const psaryConfigs: Config[] = [
    {
        minPageCount: 14,
        district: 'Zakład Linii Kolejowych w Kielcach',
        station: 'Psary',
        checkpoint: 'Ps',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: true,
            short: 'GWł',
            target: 'Góra Włodowska',
            type: 'szlak',
            awayIncreasing: true,
        },
        rightRoute: {
            isExternal: true,
            short: 'Kn',
            target: 'Knapówka',
            type: 'szlak',
            awayIncreasing: false,
        },
    },
    {
        minPageCount: 10,
        district: 'Zakład Linii Kolejowych w Kielcach',
        station: 'Psary',
        checkpoint: 'Ps',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: false,
            short: 'Ps–St',
            target: 'Starzyny',
            type: 'szlak',
            awayIncreasing: true,
        },
        rightRoute: null,
    },
    {
        minPageCount: 10,
        district: 'Zakład Linii Kolejowych w Kielcach',
        station: 'Starzyny',
        checkpoint: 'St',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: false,
            short: 'Ps–St',
            target: 'Psary',
            type: 'szlak',
            awayIncreasing: false,
        },
        rightRoute: null,
    },
    {
        minPageCount: 14,
        district: 'Zakład Linii Kolejowych w Kielcach',
        station: 'Starzyny',
        checkpoint: 'St',
        checkpointType: 'posterunek',
        leftRoute: {
            isExternal: true,
            short: 'Sp',
            target: 'Sprowa',
            type: 'szlak',
            awayIncreasing: false,
        },
        rightRoute: {
            isExternal: true,
            short: 'Kc',
            target: 'Koniecpol',
            type: 'szlak',
            awayIncreasing: true,
        },
    },
];

export const configs = [
    defaultConfig,
    ...zernikiConfigs,
    ...psaryConfigs,
];
