declare interface CharacterSkillsObject {
  magic: number
  club: number
  fist: number
  sword: number
  fishing: number
  axe: number
  distance: number
  shielding: number
}

declare interface CharacterObject extends IncompleteCharacterObject {
  serverData: ServerObject
}

/*
{
    "id": 123456,
    "nickname": "Ksu",
    "auctionEnd": 1620658800,
    "currentBid": 36300,
    "hasBeenBidded": false,
    "outfitId": "130_1",
    "serverId": 58,
    "vocationId": 3,
    "level": 123,
    "skills": {
      "magic": 113.98,
      "club": 17.53,
      "fist": 18.24,
      "sword": 18.11,
      "fishing": 16.03,
      "axe": 18.33,
      "distance": 18.08,
      "shielding": 37.52
    }
}
*/
