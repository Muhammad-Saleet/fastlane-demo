import {
    createTheme,
    useTheme as useRTheme,
} from '@shopify/restyle'

// const palette = {
//     white: "#FFFFFF",
//     black: "#000000",
//     lightGrey: "#FFFFFF",
//     darkGrey: "skyblue",
// }

const fonts = { primary: undefined }

export const lightTheme = createTheme({
    colors: {
        // background color in screen components.
        background: "#f6f6f7",

        // background color in components such as Card, Modal, and Popover.
        surface: "#ffffff",
        surfaceSubdued: "#fafbfb",
        // background color in components on surface elements such as search and input fields
        surfaceField: "#f1f2f3",

        // default border color
        border: "#8c9196",

        // color of vertical and horizontal dividers used to separate elements
        divider: "#e1e3e5",

        // icons fill color
        icon: "#5c5f62",
        iconDisabled: "#babec3",

        // text colors
        text: "#202223",
        textDisabled: "#8c9196",
        textSubdued: "#6d7175",

        // colors for interactive elements such as links, and indicators of
        // focus and selected states in components such checkboxes and radio buttons
        interactive: "#2c6ecb",
        interactiveDisabled: "#bdc1cc",
        focused: "#458fff",
        surfaceSelected: "#f2f7fe", // eg. selected item in dropdown menu
        iconOnInteractive: "#ffffff",
        textOnInteractive: "#ffffff",

        // colors for secondary and tertiary buttons and interactive elements
        action: "#ffffff",
        actionDisabled: "#babec3",

        // primary color for use in primary buttons, navigations tabs, selected surface color, etc..
        primary: "#008060",
        primaryDisabled: "#f1f1f1",
        textOnPrimary: "#ffffff",
        iconOnPrimary: "#ffffff",

        // to convey critical/dangerous/error states
        borderCritical: "#fd5749",
        borderCriticalSubdued: "#e0b3b2",
        borderCriticalDisabled: "#ffa7a3",
        iconCritical: "#d72c0d",
        surfaceCritical: "#fed3d1",
        surfaceCriticalSubdued: "#fff4f4",
        textCritical: "#d72c0d",
        interactiveCritical: "#d82c0d",
        interactiveCriticalDisabled: "#fd938d",
        iconOnCritical: "#ffffff",
        textOnCritical: "#ffffff",

        // to convey warning states
        borderWarning: "#b98900",
        borderWarningSubdued: "#e1b878",
        iconWarning: "#b98900",
        surfaceWarning: "#ffd79d",
        surfaceWarningSubdued: "#fff5ea",
        textWarning: "#916a00",

        // to convey success/positive states
        borderSuccess: "#00a47c",
        borderSuccessSubdued: "#95c9b4",
        iconSuccess: "#007f5f",
        surfaceSuccess: "#aee9d1",
        surfaceSuccessSubdued: "#f1f8f5",
        textSuccess: "#008060",
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
        xl: 20,
        xxl: 32,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    borderRadii: {
        s: 4,
        m: 8,
        l: 12,
        xl: 18,
        max: 10000,
    },
    textVariants: {
        default: {},
        displaySmall: {
            fontFamily: fonts.primary,
            fontSize: 20,
            lineHeight: 24,
            fontWeight: '400',
        },
        displayMedium: {
            fontFamily: fonts.primary,
            fontSize: 26,
            lineHeight: 32,
            fontWeight: '400',
        },
        displayLarge: {
            fontFamily: fonts.primary,
            fontSize: 28,
            lineHeight: 32,
            fontWeight: '500',
        },
        displayXLarge: {
            fontFamily: fonts.primary,
            fontSize: 42,
            lineHeight: 44,
            fontWeight: '500',
        },
        screenHeading: {
            fontFamily: fonts.primary,
            fontSize: 20,
            lineHeight: 24,
            fontWeight: '600',
        },
        heading: {
            fontFamily: fonts.primary,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '500',
        },
        subheading: {
            fontFamily: fonts.primary,
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '600',
        },
        caption: {
            fontFamily: fonts.primary,
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '400',
        },
        body: {
            fontFamily: fonts.primary,
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '400',
        },
        button: {
            fontFamily: fonts.primary,
            fontSize: 14,
            lineHeight: 16,
            fontWeight: '500',
        },
    },
})
export const darkTheme = createTheme({
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        // background color in screen components.
        background: "#0b0c0d",

        // background color in components such as Card, Modal, and Popover.
        surface: "#202123",
        surfaceSubdued: "#1a1c1d",
        // background color in components on surface elements such as search and input fields
        surfaceField: "#2f3133",

        // default border color
        border: "#505356",

        // color of vertical and horizontal dividers used to separate elements
        divider: "#1a1c1d",

        // icons fill color
        icon: "#a6acb2",
        iconDisabled: "#54575a",

        // text colors
        text: "#e3e5e7",
        textDisabled: "#6f7377",
        textSubdued: "#999fa4",

        // colors for interactive elements such as links, and indicators of
        // focus and selected states in components such checkboxes and radio buttons
        interactive: "#36a3ff",
        interactiveDisabled: "#2662b6",
        focused: "#2662b6",
        surfaceSelected: "#020e23",
        iconOnInteractive: "#ffffff",
        textOnInteractive: "#ffffff",

        // colors for secondary and tertiary buttons and interactive elements
        action: "#4d5053",
        actionDisabled: "#202223",

        // primary color for use in primary buttons, navigations tabs, selected surface color, etc..
        primary: "#008060",
        primaryDisabled: "#005640",
        textOnPrimary: "#ffffff",
        iconOnPrimary: "#e6fff4",

        // to convey critical/dangerous/error states
        borderCritical: "#e32f0e",
        borderCriticalSubdued: "#b6260b",
        borderCriticalDisabled: "#831704",
        iconCritical: "#da2d0d",
        surfaceCritical: "#450701",
        surfaceCriticalSubdued: "#370601",
        textCritical: "#e9807a",
        interactiveCritical: "#fd726a",
        interactiveCriticalDisabled: "#feaca8",
        iconOnCritical: "#fff8f7",
        textOnCritical: "#ffffff",

        // to convey warning states
        borderWarning: "#997000",
        borderWarningSubdued: "#997000",
        iconWarning: "#684b00",
        surfaceWarning: "#997000",
        surfaceWarningSubdued: "#4d3b1d",
        textWarning: "#ca9500",

        // to convey success/positive states
        borderSuccess: "#008060",
        borderSuccessSubdued: "#008766",
        iconSuccess: "#005e46",
        surfaceSuccess: "#005e46",
        surfaceSuccessSubdued: "#1c352c",
        textSuccess: "#58ad8e",
    },
})

export type Theme = typeof lightTheme;

export const useTheme = () => useRTheme<Theme>()
