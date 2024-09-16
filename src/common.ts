export type Route = {
    short: string;
    target: string;
    type: 'szlak' | 'odstep' | 'unset';
    isExternal: boolean;
    awayIncreasing: boolean | null;
};

export type Config = {
    minPageCount: number;
    district: string;
    station: string;
    checkpoint: string;
    checkpointType: 'nastawnia' | 'posterunek' | 'unset';
    leftRoute: Route;
    rightRoute: Route | null;
};

export function pageCountString(count: number, isExtra: boolean) {
    if (count < 0 || count >= 1000) throw new Error('Liczba spoza zakresu');
    if (count % 1 !== 0) throw new Error('Page count is not an integer');

    if (count >= 100) {
        const smallPart = count % 100;
        const bigPart = count - smallPart;
        let result = {
            100: 'sto',
            200: 'dwieście',
            300: 'trzysta',
            400: 'czterysta',
            500: 'pięćset',
            600: 'sześćset',
            700: 'siedemset',
            800: 'osiemset',
            900: 'dziewięćset',
        }[bigPart];
        if (smallPart !== 0) result += ' ' + pageCountString(smallPart, true);
        return result;
    }

    if (count >= 20) {
        const smallPart = count % 10;
        const bigPart = count - smallPart;
        let result = {
            20: 'dwadzieścia',
            30: 'trzydzieści',
            40: 'czterdzieści',
            50: 'pięćdziesiąt',
            60: 'sześćdziesiąt',
            70: 'siedemdziesiąt',
            80: 'osiemdziesiąt',
            90: 'dziewięćdziesiąt',
        }[bigPart];
        if (smallPart !== 0) result += ' ' + pageCountString(smallPart, true);
        return result;
    }

    if (isExtra) {
        if (count === 0) return '';
        if (count === 1) return 'jeden';
    }

    return {
        0: 'zero',
        1: 'jedna',
        2: 'dwie',
        3: 'trzy',
        4: 'cztery',
        5: 'pięć',
        6: 'sześć',
        7: 'siedem',
        8: 'osiem',
        9: 'dziewięć',
        10: 'dziesięć',
        11: 'jedenaście',
        12: 'dwanaście',
        13: 'trzynaście',
        14: 'czternaście',
        15: 'piętnaście',
        16: 'szesnaście',
        17: 'siedemnaście',
        18: 'osiemnaście',
        19: 'dziewiętnaście',
    }[count];
}
