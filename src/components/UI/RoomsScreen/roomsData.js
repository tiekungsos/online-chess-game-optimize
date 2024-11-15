import ICON_CLASSIC from "../../../assets/img/1v1_classic_header.png";
import ICON_SILVER from "../../../assets/img/1v1_silver_header.png";
import ICON_GOLD from "../../../assets/img/1v1_gold_header.png";
import ICON_PLATINUM from "../../../assets/img/1v1_platinum_header.png";
import ICON_DIAMOND from "../../../assets/img/1v1_diamond_header.png";
import BG_CLASSIC from "../../../assets/img/1v1_classic_bg.png";
import BG_SILVER from "../../../assets/img/1v1_silver_bg.png";
import BG_GOLD from "../../../assets/img/1v1_gold_bg.png";
import BG_PLATINUM from "../../../assets/img/1v1_platinum_bg.png";
import BG_DIAMOND from "../../../assets/img/1v1_diamond_bg.png";

export const ROOMS = [
  { name: "Classic Room", pool: "Pool: No rewards", desc: "Players can play for free 1v1 against another player", icon: ICON_CLASSIC, bg: BG_CLASSIC },
  { name: "Silver Room", pool: "Pool: 98 $LLG", desc: "Each player needs to put in 50 $LLG", icon: ICON_SILVER, bg: BG_SILVER },
  { name: "Gold Room", pool: "Pool: 198 $LLG", desc: "Each player needs to put in 100 $LLG", icon: ICON_GOLD, bg: BG_GOLD },
  { name: "Platinum Room", pool: "Pool: 392 $LLG", desc: "Each player needs to put in 200 $LLG", icon: ICON_PLATINUM, bg: BG_PLATINUM },
  { name: "Diamond Room", pool: "Pool: 980 $LLG", desc: "Each player needs to put in 500 $LLG", icon: ICON_DIAMOND, bg: BG_DIAMOND },
];
