export const normalizeSteamProfile=p=>({steamId:p.id,displayName:p.displayName,avatar:p.photos?.at(-1)?.value});
