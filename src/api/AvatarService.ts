import { CharacterBio } from "../config/rulesets/shadowrun/6e/CharacterBio.interface";

const buildAvatarURL = (md5: string) =>
  `https://www.gravatar.com/avatar/${md5}?d=retro`;

export function getRandomAvatar() {
  return buildAvatarURL(MD5.fake());
}

export function getAvatarFor(characterBio: CharacterBio) {
  return buildAvatarURL(MD5.forUUID(characterBio.uuid));
}

export class MD5 {
  static fake(): string {
    const opts = "0123456789abcdef";
    return new Array(32).fill(true).reduce((p: string) => {
      return p.concat(opts[Math.floor(Math.random() * opts.length)]);
    }, "");
  }
  static forUUID(uuid: string): string {
    return uuid.split("-").join("").slice(0, 33);
  }
}
