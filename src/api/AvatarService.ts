function fakeMD5(): string {
    const opts = "0123456789abcdef";
    return new Array(32)
        .fill(true)
        .reduce((p: string) => {
            return p.concat(opts[Math.floor(Math.random() * opts.length)]);
    }, "");
}

export const AVATAR_IMAGE = () => `https://www.gravatar.com/avatar/${fakeMD5()}?d=retro`;
