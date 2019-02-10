//Cinnabar_Apple_Pronghorn
//Denim Gorse Weasel
//Pastel Pink Sunglo Mini Donkey
//Pomegranate Denim Pigeon
//Pomegranate Fiord Sloth Bear
//Pomegranate Picton Blue Cardinal
//Seance Mine Shaft Honey

import CinnabarApplePronghorn from "./Cinnabar Apple Pronghorn.json";
import DenimGorseWeasel from "./Denim Gorse Weasel.json";
import OuterSpaceSilverChaliceKiwaHirsuta from "./Outer Space Silver Chalice Kiwa Hirsuta.json";
import PastelPinkSungloMiniDonkey from "./Pastel Pink Sunglo Mini Donkey.json";
import PomegranateDenimPigeon from "./Pomegranate Denim Pigeon.json";
import PomegranateSilverChaliceDonkey from "./Pomegranate Silver Chalice Donkey.json";
import PomegranateFiordSlothBear from "./Pomegranate Fiord Sloth Bear.json";
import PomegranatePictonBlueCardinal from "./Pomegranate Picton Blue Cardinal.json";
import SanMarinoRazzmatazzRats_default_theme from "./San Marino Razzmatazz Rats.json";
import SeanceMineShaftHoney from "./Seance Mine Shaft Honey.json";

const themes = [
  CinnabarApplePronghorn,
  DenimGorseWeasel,
  OuterSpaceSilverChaliceKiwaHirsuta,
  PastelPinkSungloMiniDonkey,
  PomegranateDenimPigeon,
  PomegranateSilverChaliceDonkey,
  PomegranateFiordSlothBear,
  PomegranatePictonBlueCardinal,
  SanMarinoRazzmatazzRats_default_theme,
  SeanceMineShaftHoney
];

// Updated theme topography
themes.forEach(theme => {
  theme.typography.useNextVariants = true;
});

export default themes;
