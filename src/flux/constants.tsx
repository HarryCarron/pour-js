export const PourActions = {
    BREW_METHOD_CHANGED: 'BREW_METHOD_CHANGED',
    ACTIVE_VIEW_CHANGED: 'ACTIVE_VIEW_CHANGED'
}
export enum views {
    NONE = -1,
    BREW_CONFIGURATION = 0,
    MEASURE = 1,
}

export enum brewMethods {
    AEROPRESS,
    CHEMEX,
    FRENCHPRESS,
    SIPHON,
}