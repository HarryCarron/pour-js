import { brewMethods } from "./../flux/constants";

export const brewWeights = {
    [brewMethods.AEROPRESS]: [16, 200], //aeropress
    [brewMethods.CHEMEX] : [32, 200], //chemex
    [brewMethods.FRENCHPRESS] : [30, 350], //french press
    [brewMethods.SIPHON] : [27, 300] // siphon
}