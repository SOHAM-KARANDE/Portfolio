import { ThemePalettes } from './theme/types';

export const palettes: ThemePalettes = {
  baseline: {
    name: 'Baseline',
    light: {
      primary: '103 80 164', 'on-primary': '255 255 255', 'primary-container': '233 220 237', 'on-primary-container': '28 16 38',
      secondary: '98 91 106', 'on-secondary': '255 255 255', 'secondary-container': '231 223 239', 'on-secondary-container': '30 25 36',
      tertiary: '125 84 95', 'on-tertiary': '255 255 255', 'tertiary-container': '255 217 225', 'on-tertiary-container': '49 17 27',
      surface: '255 251 254', 'on-surface': '28 27 30', 'surface-container-low': '247 242 246', 'surface-container': '241 236 240', 'surface-container-high': '235 231 235', 'surface-container-highest': '229 225 229', 'on-surface-variant': '73 69 78', outline: '121 116 126'
    },
    dark: {
      primary: '208 188 255', 'on-primary': '50 37 60', 'primary-container': '72 59 83', 'on-primary-container': '233 220 237',
      secondary: '204 196 212', 'on-secondary': '52 46 58', 'secondary-container': '75 69 81', 'on-secondary-container': '231 223 239',
      tertiary: '239 184 198', 'on-tertiary': '73 39 49', 'tertiary-container': '98 61 72', 'on-tertiary-container': '255 217 225',
      surface: '20 18 20', 'on-surface': '229 225 229', 'surface-container-low': '28 27 30', 'surface-container': '33 31 34', 'surface-container-high': '43 41 44', 'surface-container-highest': '54 52 55', 'on-surface-variant': '202 196 206', outline: '147 143 152'
    },
  },
  'yellow-orange': {
    name: 'Bedrock',
    light: {
        primary: '133 81 0', 'on-primary': '255 255 255', 'primary-container': '255 220 181', 'on-primary-container': '40 24 0',
        secondary: '113 91 66', 'on-secondary': '255 255 255', 'secondary-container': '252 222 192', 'on-secondary-container': '39 25 10',
        tertiary: '91 99 63', 'on-tertiary': '255 255 255', 'tertiary-container': '224 233 186', 'on-tertiary-container': '25 31 7',
        surface: '255 251 254', 'on-surface': '31 27 23', 'surface-container-low': '249 243 238', 'surface-container': '243 237 232', 'surface-container-high': '238 232 226', 'surface-container-highest': '232 226 221', 'on-surface-variant': '80 70 60', outline: '128 118 107'
    },
    dark: {
        primary: '255 186 96', 'on-primary': '70 43 0', 'primary-container': '100 61 0', 'on-primary-container': '255 220 181',
        secondary: '223 194 165', 'on-secondary': '64 47 28', 'secondary-container': '88 68 46', 'on-secondary-container': '252 222 192',
        tertiary: '197 205 160', 'on-tertiary': '46 52 24', 'tertiary-container': '68 75 42', 'on-tertiary-container': '224 233 186',
        surface: '22 19 16', 'on-surface': '232 226 221', 'surface-container-low': '31 27 23', 'surface-container': '36 32 28', 'surface-container-high': '46 42 38', 'surface-container-highest': '57 52 48', 'on-surface-variant': '208 198 186', outline: '154 144 132'
    }
  },
  blue: {
    name: 'Workspace',
    light: {
        primary: '0 95 184', 'on-primary': '255 255 255', 'primary-container': '212 227 255', 'on-primary-container': '0 28 58',
        secondary: '84 95 111', 'on-secondary': '255 255 255', 'secondary-container': '216 227 245', 'on-secondary-container': '19 29 42',
        tertiary: '110 87 119', 'on-tertiary': '255 255 255', 'tertiary-container': '247 218 255', 'on-tertiary-container': '39 22 47',
        surface: '253 251 255', 'on-surface': '27 28 30', 'surface-container-low': '247 243 249', 'surface-container': '242 237 243', 'surface-container-high': '236 231 238', 'surface-container-highest': '230 225 232', 'on-surface-variant': '69 71 75', outline: '117 119 123'
    },
    dark: {
        primary: '168 199 255', 'on-primary': '0 50 96', 'primary-container': '0 72 138', 'on-primary-container': '212 227 255',
        secondary: '188 199 217', 'on-secondary': '39 49 63', 'secondary-container': '61 72 86', 'on-secondary-container': '216 227 245',
        tertiary: '217 190 228', 'on-tertiary': '62 42 70', 'tertiary-container': '86 64 94', 'on-tertiary-container': '247 218 255',
        surface: '19 19 21', 'on-surface': '230 225 232', 'surface-container-low': '27 28 30', 'surface-container': '32 32 35', 'surface-container-high': '42 42 45', 'surface-container-highest': '53 53 56', 'on-surface-variant': '197 199 203', outline: '142 144 148'
    }
  },
  green: {
    name: 'Nature',
    light: {
        primary: '35 106 58', 'on-primary': '255 255 255', 'primary-container': '182 244 199', 'on-primary-container': '0 33 13',
        secondary: '81 99 85', 'on-secondary': '255 255 255', 'secondary-container': '213 232 216', 'on-secondary-container': '18 32 21',
        tertiary: '61 101 116', 'on-tertiary': '255 255 255', 'tertiary-container': '192 234 252', 'on-tertiary-container': '0 31 40',
        surface: '252 252 249', 'on-surface': '26 28 26', 'surface-container-low': '246 246 243', 'surface-container': '240 241 237', 'surface-container-high': '235 235 232', 'surface-container-highest': '229 229 226', 'on-surface-variant': '67 73 68', outline: '115 121 116'
    },
    dark: {
        primary: '155 216 174', 'on-primary': '0 57 26', 'primary-container': '8 81 41', 'on-primary-container': '182 244 199',
        secondary: '185 204 188', 'on-secondary': '35 53 40', 'secondary-container': '58 75 62', 'on-secondary-container': '213 232 216',
        tertiary: '163 206 224', 'on-tertiary': '15 54 68', 'tertiary-container': '38 78 91', 'on-tertiary-container': '192 234 252',
        surface: '18 20 18', 'on-surface': '229 229 226', 'surface-container-low': '26 28 26', 'surface-container': '31 33 30', 'surface-container-high': '41 43 40', 'surface-container-highest': '52 54 50', 'on-surface-variant': '195 201 196', outline: '140 146 140'
    }
  },
};

export type PaletteName = keyof typeof palettes;
export type Palette = typeof palettes[PaletteName];