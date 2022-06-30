const toWebpFormat = (name: string): string => {
    return name.slice(0, -4) + ".webp";
};

export default toWebpFormat;
