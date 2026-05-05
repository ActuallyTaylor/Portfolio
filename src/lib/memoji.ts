export enum Memoji {
  angry = "angry",
  awkward = "awkward",
  blow_nose = "blow-nose",
  call_me_smirk = "call-me-smirk",
  calm = "calm",
  celebration = "celebration",
  chefs_kiss = "chefs-kiss",
  crying = "crying",
  curse = "curse",
  dont_respond_dont_respond = "dont-respond-dont-respond",
  explosion = "explosion",
  eye_roll = "eye_roll",
  facepalm = "facepalm",
  fingers_crossed = "fingers-crossed",
  fist_bump = "fist-bump",
  gasp = "gasp",
  gossip = "gossip",
  halo = "halo",
  heart_eyes  = "heart-eyes",
  heart_hands = "heart-hands",
  heartbroken = "heartbroken",
  hearts = "hearts",
  huff = "huff",
  idea_in_the_clouds = "idea-in-the-clouds",
  innocent = "innocent",
  jazz_hands = "jazz-hands",
  just_stop = "just-stop",
  kissy = "kissy",
  kpop_heart = "kpop-heart",
  laugh = "laugh",
  nervous = "nervous",
  oh_my_god = "oh-my-god",
  peace = "peace",
  peek_a_boo = "peek-a-boo",
  present = "present",
  raise_hand = "raise-hand",
  sarcastic_shock = "sarcastic-shock",
  shhh = "shhh",
  sleepy = "sleepy",
  smile = "smile",
  smirk = "smirk",
  so_what = "so-what",
  star_eyes = "star-eyes",
  stop = "stop",
  thinking = "thinking",
  thumbs_down = "thumbs-down",
  thumbs_up = "thumbs-up",
  wave = "wave",
  yawn = "yawn",
}

export enum CircleColor {
  slate = "slate",
  purple = "purple",
  light_blue = "light_blue",
  pink = "pink",
  light_orange = "light_orange",
  green = "green",
  brown = "brown",
  dirty_orange = "dirty_orange",
  dusky_purple = "dusky_purple",
  dusky_blue = "dusky_blue",
  dusky_teal = "dusky_teal",
  bright_magenta = "bright_magenta",
  bright_teal = "bright_teal",
  bright_green = "bright_green",
  gray = "gray",
  tan = "tan",
  olive = "olive",
  black = "black",
}

export function gradientForCircleColor(color: CircleColor): [string, string] {
  switch (color) {
    case CircleColor.slate:
      return ["#A9ADB6", "#868C97"];
    case CircleColor.purple:
      return ["#CCBFFA", "#B9A3F7"];
    case CircleColor.light_blue:
      return ["#92CBEF", "#62B4E7"];
    case CircleColor.pink:
      return ["#FF9FBF", "#FF76A4"];
    case CircleColor.light_orange:
      return ["#FACC91", "#F7B761"];
    case CircleColor.green:
      return ["#AEEFA4", "#89E97C"];
    case CircleColor.brown:
      return ["#E0B4B1", "#D19592"];
    case CircleColor.dirty_orange:
      return ["#F7AF8B", "#F28D5A"];
    case CircleColor.dusky_purple:
      return ["#CBBED6", "#B7A3C5"];
    case CircleColor.dusky_blue:
      return ["#B2CDE2", "#92B8D6"];
    case CircleColor.dusky_teal:
      return ["#BBE2E4", "#9ED7D9"];
    case CircleColor.bright_magenta:
      return ["#F9A1EB", "#F376E2"];
    case CircleColor.bright_teal:
      return ["#80EFEF", "#00E6E8"];
    case CircleColor.bright_green:
      return ["#81F4AD", "#31EF8C"];
    case CircleColor.gray:
      return ["#CFC8C0", "#BCB1A6"];
    case CircleColor.tan:
      return ["#E2C9A8", "#D7B384"];
    case CircleColor.olive:
      return ["#C4D3C2", "#ACC3A8"];
    case CircleColor.black:
      return ["#6F6F6F", "#343434"];
  }
}