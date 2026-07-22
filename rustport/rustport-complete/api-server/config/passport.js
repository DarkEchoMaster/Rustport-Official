import passport from "passport";
import { Strategy as SteamStrategy } from "passport-steam";
import { env } from "./environment.js";

if (env.steamApiKey) {
  passport.use(new SteamStrategy({
    returnURL: env.steamReturnUrl,
    realm: env.steamRealm,
    apiKey: env.steamApiKey
  }, (_identifier, profile, done) => done(null, {
    steamId: profile.id,
    displayName: profile.displayName,
    avatar: profile.photos?.at(-1)?.value,
    profileUrl: profile._json?.profileurl,
    role: profile.id === env.adminSteamId ? "admin" : "user",
    banner: "/assets/rustport/monument-banners.jpeg"
  })));
}

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;
