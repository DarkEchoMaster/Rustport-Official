import passport from "passport"; import {Strategy as SteamStrategy} from "passport-steam";
if(process.env.STEAM_API_KEY){passport.use(new SteamStrategy({returnURL:process.env.STEAM_RETURN_URL,realm:process.env.STEAM_REALM,apiKey:process.env.STEAM_API_KEY},(identifier,profile,done)=>done(null,{steamId:profile.id,displayName:profile.displayName,avatar:profile.photos?.at(-1)?.value,role:profile.id===process.env.ADMIN_STEAM_ID?"admin":"user"})));}
passport.serializeUser((u,d)=>d(null,u));passport.deserializeUser((u,d)=>d(null,u));export default passport;
