export default [
  {
    id: 1,
    name: "Ace in the hole",
    trait: "Knowledge",
    hand: "Two Pairs",
    speed: "10 minutes",
    duration: "1 day/hex level",
    range: "Touch",
    descriptionStrings: [
      "Hucksters don’t usually play well with others. When they do, the effects can be spectacular.",
      "This hex allows the caster to provide another person with a magical “Ace in the hole.” The huckster links a hex he can cast to a small focus of some sort, usually a playing card, which can then be given to another. The holder of this focus can cast the hex just as if she were the huckster.",
      "When this person triggers the link, she rolls the huckster’s skill with the hex but substitutes her Trait dice for the huckster’s. If successful, she draws the cards indicated by the roll. Of course, this means she suffers any backlash as well. Going bust on the hex Aptitude roll and drawing any Joker, in this case, regardless of either person’s skill, causes backlash.",
      "There are a few limitations on Ace in the hole. First, the link only lasts 1 day per the huckster’s level in Ace in the hole. Second, any hexes which could only be cast on others (helpin’ hand, etc.) cannot be cast on either the original huckster or the person holding the Ace — they must target a third person. Any hex which can normally only be used on the huckster, can now be used either on the huckster or the person holding the Ace. Finally, while a hex is linked to an Ace in the hole, the huckster cannot cast that hex himself.",
    ]
  },
  {
    id: 2,
    name: "Beast Master",
    trait: "Smarts",
    hand: "Pair",
    speed: "1",
    duration: "Concentration",
    range: "5 yards/hex level",
    descriptionStrings: [
      "With call o’ the wild, a huckster can summon animal allies to his aid. Sometimes, however, he may find there is no need to summon the animals—they’re already there. Beast master lets a huckster mentally command animals within range of the hex.",
      "Unlike call o’ the wild, this hex doesn’t give the huckster much choice over what animals he gets. He’s limited to what’s on hand when he casts the hex. The affected animals do his bidding as long as he continues to concentrate. As soon as he stops, however, the animals revert to their normal actions.",
      "Beast master doesn’t impart any intelligence to the animals it affects. The caster shouldn’t expect a squirrel to read a note over the bad guy’s shoulder. Controlled animals must still make guts checks when faced with supernatural opponents.",
      "If the animals the huckster targets are trained or under the control of someone with the animal wranglin’ Aptitude, it’s a little tougher to manage. Make an opposed roll between the two attempting to control the varmints, the caster’s beast master skill versus the other’s animal wranglin’. Characters on horseback use their horse ridin’ instead. If the huckster loses this contest, the hex fails.",
      "The number of animals the huckster can control is based on the hand he draws"
    ],
    handTable: {
      effect: "Number",
      hands: {
        Pair: "1d6",
        Jacks: "3d6",
        "Two Pairs": "4d8",
        "Three of a Kind": "5d8",
        Straight: "6d8",
        Flush: "7d10",
        "Full House": "8d10",
        "Four of a Kind": "9d10",
        "Straight Flush": "10d12",
        "Royal Flush": "10d20",
      },
    },
  },
  {
    id: 3,
    name: "Confound",
    trait: "Smarts",
    hand: "Ace",
    speed: "1",
    duration: "1 round",
    range: "5 yards/hex level",
    descriptionStrings: [
      "A huckster using confound cannot only make  something harder than it looked, he can make it  harder than it is!",
      "This hex causes the Target Number for any  single Trait or Aptitude roll to increase in  difficulty. Raises for this roll are figured from the  new adjusted TN. It is effective against even  magical Aptitudes like hexes, rituals, and even a  blessed’s faith rolls.",
      "Confound only affects the next action made by  the target. If the next action the target makes  doesn’t involve an Aptitude or Trait roll, the hex  is wasted. Additionally, if a full round elapses  without the target taking an action, the hex is  wasted.",
      "The increase of the Target Number is based  on the hand drawn by the huckster. The  minimum hand increases the TN by +2. Each  hand above the minimum required adds an  additional +2 to the TN."
    ]
  },
  {
    id: 4,
    name: "Corporeal Twist",
    trait: "Smarts",
    hand: "Pair",
    speed: "1",
    duration: "Concentration or 1 Wind/round",
    range: "5 yards/hex level",
    descriptionString: [
      "Corporeal twist is the opposite of corporealtweak. It lowers one of a target’s physical Traitsby one die type for each of the hands listedunder corporeal tweak. Once the die type hasdropped to a d4, the Coordination drops by 1 foreach level, down to a minimum of 1d4. A subjectcan only be affected by one corporeal twist at atime. Any further corporeal twists cast on atarget while one is still in effect automaticallyfail.",
    ]
  },
  {
    id: 5,
    name: "Helpin' Hand",
    trait: "Smarts",
    hand: "Ace",
    speed: "10 minutes",
    duration: "Permanent",
    range: "1 yard",
    descriptionStrings: [
      "Helpin’ hand allows a huckster to heal a  suffering companion’s wounds (not his own).  Each successful casting reduces the wounds in  all areas by 1 level each. During this time the  caster can take no actions other than sitting  near the patient and waiting (a good time to  brush up on one’s solitaire).",
      "The hand needed depends on the victim’s  highest wound level. Note that helpin’ hand can’t  heal more than 1 level of wounds at a time. The  huckster can treat several wound levels by  casting the hex more than once, however. Helpin’  hand also can’t restore maimed limbs. Only the  divine favors of shamans and the blessed can  pull off that trick.",
      "Undead, like the Harrowed, cannot be affected  by this hex. To fix their wounds, the huckster  must use the reanimate hex."
    ],
    handTable: {
      effect: "Wound",
      hands: {
        Pair: "1d6",
        Jacks: "3d6",
        "Two Pairs": "4d8",
        "Three of a Kind": "5d8",
        Straight: "6d8",
        Flush: "7d10",
        "Full House": "8d10",
        "Four of a Kind": "9d10",
        "Straight Flush": "10d12",
        "Royal Flush": "10d20",
      },
    },
  },
  {
    id: 6,
    name: "Mirage",
    trait: "Smarts",
    hand: "Pair",
    speed: "2",
    duration: "Concentration or 1 Wind/round",
    range: "5 yards/hex level",
    descriptionStrings: [
      "Many a cowpoke has been misled by a mirage.  Not all of these are natural phenomenon—some  sprang from a hand of cards!",
      "This hex allows a huckster to create an  illusion of a place or inanimate object. For the  purposes of this hex, normal plants such as  grass and trees are considered inanimate.",
      "The effects of the hex are limited to an area  equal to 200 square feet per hex level. This is the  equivalent of a 20’ x 10’ rectangle, although the  huckster can modify this area into any shape, as  long it does not exceed the limit. If needed, the  huckster can move the illusion as appropriate  within the range of the hex. Note, though, that  any illusionary objects created with this hex  must be three dimensional. Your huckster can’t  extend the size of his illusion by making a  locomotive which appears normal from the side  but which is only 1” wide.",
      "The illusion produced by the hex is very  realistic. So much so, in fact, that anyone  viewing it must first have a reason to doubt its  existence—and then make a Hard (9) Cognition  roll—to recognize it for false. Anyone attempting  to touch an illusion realizes it to be false  without having to roll. Also, since it is visual, it  has absolutely no effect on the blind or  creatures that do not use vision as their primary  sense",
      "The precision of the hex is limited by the  hand the huckster draws. Initially, only simple  objects can be reproduced, but with higher  hands he can produce very intricate illusions."
    ],
    handTable: {
      effect: "Complexity",
      hands: {
        Ace: "Single uniform object(blank wall or moundof dirt)",
        Pair: "Single simple object orarea (door, emptyroom, muddy pond)",
        Jacks:
          "Single moderately diverseobject (wagon, rifle,single dead tree)",
        "Two Pair":
          "Single complex object ormultiple simple objects(Gatling gun, sparselyfurnished room, singlelive tree)",
        "Three of a Kind":
          "Multiple moderatelydiverse objects(furnished room,garden)",
        Straight: "Multiple complex objects(complete building,train)",
        Flush: "Extremely complexobjects (interior of agizmo)",
      },
    },
  },
  {
    id: 7,
    name: "Raisin' the Pot",
    trait: "Smarts",
    hand: "Pair",
    speed: "1 (Vamoose)",
    duration: "Instant",
    range: "5 yards/hex level",
    descriptionStrings: [
      "By raising the pot, a huckster can make a  good thing better. The huckster forces the  manitou to give himself or a companion a  supernatural “leg up.”",
      "The hex is only effective when cast  immediately after another Trait or Aptitude roll  has been made successfully. To do this, the  huckster must spend his highest card, just as if  he were vamoosin’. He then casts raisin’ the pot!  and draws his hand. Based on the hand drawn,  he increases the number of raises on the  original Trait or Aptitude roll.",
      "If the huckster goes bust on his roll or draws  a black Joker, not only does he suffer backlash  as normal, but the original Trait or Aptitude  check fails regardless of the roll."      
    ],
    handTable: {
      effect: "Raises Gained",
      hands: {
        Pair: "1",
        Jacks: "2",
        "Two Pairs": "3",
        "Three of a Kind": "4",
        Straight: "5",
        Flush: "6",
      },
    },
  },
  {
    id: 8,
    name: "Shadow Man",
    trait: "Smarts",
    hand: "Pair",
    speed: "1",
    duration: "Concentration",  
    range: "self",
    descriptionStrings: [
      "This is the favored hex of serious skulkers  everywhere.",
      "Shadow man creates a pocket of shadow  around the huckster. It does not make him  invisible, but it does add to his sneak rolls. A  Pair adds +5 to the huckster’s roll. Better hands  add an additional +2 per level.",
      "The huckster must still attempt to move  stealthily. Nothing stands out quite like a pocket  of shadow moving across main street at high  noon! Such actions negate the bonus.",
    ]
  },
  {
    id: 9,
    name: "Soul Blast",
    trait: "Spirit",
    hand: "Ace",
    speed: "1",
    duration: "Instant",
    range: "50 yards/hex level",
    descriptionString: [
      "The hexslinger’s best friend is the soul blast  hex. When cast, an almost invisible stream of  ghostly white energy races from the huckster’s  palm toward his target. The stream slams into  the victim like a bullet. Unlike a bullet, however,  soul blast has no effect on inanimate objects  (Harrowed, Walkin’ Dead, and other abominations  are very animate, by the way!) because it is  purely spiritual energy. The blast can only  damage things which have a spiritual component  to them—people, animals, undead, Harrowed, etc.",
      "Just because the hex comes off doesn’t mean  it hits its target. Determine the Target Number  like a gunshot, starting with a Fair (5) TN. Ignore  range, but figure other penalties such as cover,  size, etc. The caster can even attempt a called  shot if he wishes.",
      "Roll the huckster’s soul blast skill, and use  that result as both your attack roll and to figure  how many cards you get to draw. Remember that  the Target Number to determine if the spell  succeeds is not affected by modifiers for called  shots or other target modifiers, except wound  effects. It is possible to successfully cast soul  blast and still miss the target.",
      "If the hex hits, damage depends on the hand  drawn, as shown on Soul Blast Table on the next  page. Soul blast does receive bonus dice  according to hit location: one die for hits to the  gizzards and two dice for head shots. Armor  does not protect against the damage from a soul  blast, nor does cover. The soul blast just goes  right through it",
      "For some reason, a Dead Man’s Hand (two  black Aces, two black 8s, and a Jack of  Diamonds) causes automatic death."
    ],
    handTable: {
      effect: "Damage",
      hands: {
        Pair: "1d4 Wind",
        Jacks: "2d4",
        "Two Pair": "s3d6",
        "Three of a Kind": "4d8",
        Straight: "5d8",
        Flush: "5d10",
        "Full House": "6d10",
        "Four of a Kind": "6d12",
        "Straight Flush": "7d12",
        "Royal Flush": "8d12",
      },
    },
  },
];