export default {
  Meta: {
    title: 'Char Bazaar',
    description:
      'Filter and search for Tibia characters on the official Char Bazaar!',
  },
  AuctionsGrid: {
    filterButtonLabel: 'Open filter drawer',
    sortingButtonLabel: 'Set the sorting order and criteria',
    filter: 'filter',
    filters: 'filters',
    is: 'is',
    are: 'are',
    active: 'active',
    noItemsPagination: 'No characters found',
    filterDrawerLabel: 'Filter form',
    descendingSwitchLabel: 'Sort by descending order',
    descending: 'Descending',
    sortModes: {
      auctionEnd: 'Auction End',
      level: 'Level',
      price: 'Price',
      priceBidded: 'Price (bidded only)',
    },
    noAuctionFound: 'Sorry, no auction was found',
    changeFilters: 'Change filters',
  },
  FilterDrawer: {
    title: 'Filters',
    exevoProExclusive: '(exclusive for {{exevopro}})',
    labels: {
      bazaarHistory: 'Bazaar History',
      searchNickname: 'Search nickname',
      vocation: 'Vocation',
      serverLocation: 'Server location',
      storeItems: 'Store items',
      minSkill: 'Minimum skill level',
      tcInvested: 'Tibia Coins invested',
      biddedOnly: 'Bidded only',
      rareItems: 'Rare items',
      rareAchievements: 'Rare achievements',
      misc: 'Misc',
    },
    placeholders: {
      server: 'Choose a server',
      imbuements: 'Select imbuements',
      charms: 'Select charms',
      quests: 'Select quests',
      achievements: 'Select achievements',
      rareItems: 'Choose an item',
    },
    tooltips: {
      rareItems:
        'If a rare item is not on this list it means that there are no auctions available with it.',
      rareNicknames:
        "Nicknames with special characters (äëïöüÿ'-.,), 2-3 characters length and consecutive uppercase letters (e.g XVI)",
    },
    toggleAll: {
      imbuements: 'All imbuements',
      charms: 'All charms',
      items: 'All items',
    },
    resetFilters: 'Reset filters',
    green: 'Green',
    yellow: 'Yellow',
    rareNicknamesButton: 'Rare nicknames',
    skullEmoji: 'skull',
    SpritePicker: {
      item: 'item is selected',
      items: 'items are selected',
    },
  },
}
