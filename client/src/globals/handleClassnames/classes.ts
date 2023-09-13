export const classes = (classes: (string | null | boolean | undefined)[]): string => {
    return classes.filter(Boolean).join(' ').trim();
};