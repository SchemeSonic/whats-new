const TAG_SETTINGS = {
  NEW_FEATURE: {
    text: 'New Feature',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#99d066',
  },
  IMPROVEMENT: {
    text: 'Improvement',
    color: '#fff',
    backgroundColor: '#ed8c22',
  },
  ANNOUNCEMENT: {
    text: 'Announcement',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#5eb8ff',
  },
};

export const announcements = [
  {
    title: "NEW ABILITY WORD: COVEN",
    date: new Date("2022-04-09"),
    version: 'v1.1.0',
    tags: [TAG_SETTINGS.NEW_FEATURE],
    overview: `
Coven is an ability word found on cards with abilities that care about controlling three or more creatures with different powers.

![](https://media.wizards.com/2021/mid/en_fAN7wGpmjW.png)`,
    content: `
Coven is an ability word found on cards with abilities that care about controlling three or more creatures with different powers.

![](https://media.wizards.com/2021/mid/en_fAN7wGpmjW.png)

* A creature has different power from another if their powers are different numbers. For example, a 1/1 creature and a 2/1 creature have different powers.

* For three creatures to have different powers from one another, each of their powers needs to be different. A 1/1 creature, a 2/1 creature, and another 2/1 creature aren't three creatures with different powers, even though both 2/1 creatures have different power than the 1/1 creature.

* Many coven abilities, such as that of Dawnhart Wardens above, are triggered abilities with intervening if clauses. You must control three or more creatures with different powers at the time the ability triggers and at the time the ability tries to resolve. They do not, however, need to be the same set of creatures in both cases.

`,
  },
  {
    title: 'RETURNING KEYWORD ABILITY: FLASHBACK',
    date: new Date("2022-03-21"),
    tags: [TAG_SETTINGS.IMPROVEMENT],
    overview: `
Flashback is a returning mechanic that gives cards a second chance to have an impact.

![](https://media.wizards.com/2021/mid/en_6w9rKEzW2C.png)`,
    content: `
Flashback is a returning mechanic that gives cards a second chance to have an impact.

![](https://media.wizards.com/2021/mid/en_6w9rKEzW2C.png)

* "Flashback [cost]" means "You may cast this card from your graveyard by paying [cost] rather than paying its mana cost" and "If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack."

* You must still follow any timing restrictions and permissions, including those based on the card's type. For instance, you can cast a sorcery using flashback only when you could normally cast a sorcery.

* To determine the total cost of a spell, start with the mana cost or alternative cost (such as a flashback cost) you're paying, add any cost increases, then apply any cost reductions. The mana value of the spell is determined only by its mana cost, no matter what the total cost to cast the spell was.

* A spell cast using flashback will always be exiled afterward, whether it resolves, is countered, or leaves the stack in some other way.

* You can cast a spell using flashback even if it was somehow put into your graveyard without having been cast.

* If a card with flashback is put into your graveyard during your turn, you can cast it if it's legal to do so before any other player can take any actions.

`,
  },
];
