
export function size2str(size: number): string {
    if (size < 1024) {
        return `${size}B`;
    }
    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)}KB`;
    }

    if (size < 1024 * 1024 * 1024) {
        return `${(size / 1024 / 1024).toFixed(2)}MB`;
    }

    if (size < 1024 * 1024 * 1024 * 1024) {
        return `${(size / 1024 / 1024 / 1024).toFixed(2)}GB`;
    }

    if (size < 1024 * 1024 * 1024 * 1024 * 1024) {
        return `${(size / 1024 / 1024 / 1024 / 1024).toFixed(2)}TB`;
    }

    return `${(size / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)}PB`;
}