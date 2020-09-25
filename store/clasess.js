export const state = () => ({
  table: {
    1: { class: 'Barbarian', roll: 1 },
    2: { class: 'Bard', roll: 2 },
    3: { class: 'Cleric', roll: 3 },
    4: { class: 'Druid', roll: 4 },
    5: { class: 'Fighter', roll: 5 },
    6: { class: 'Monk', roll: 6 },
    7: { class: 'Paladin', roll: 7 },
    8: { class: 'Ranger', roll: 8 },
    9: { class: 'Rouge', roll: 9 },
    10: { class: 'Sorcerer', roll: 10 },
    11: { class: 'Warlock', roll: 11 },
    12: { class: 'Wizard', roll: 12 },
  },
  subclass: {
    Barbarian: {
      name: 'Primal Paths',
      subclasses: ['Path of the Berserker', 'Path of the Totem Warrior'],
    },
    Bard: {
      name: 'Bardic Colleges',
      subclasses: ['College of Lore', 'College of Valor'],
    },
    Cleric: {
      name: 'Divine Domains',
      subclasses: [
        'Knowledge Domain',
        'Life Domain',
        'Light Domain',
        'Nature Domain',
        'Tempest Domain',
        'Trickery Domain',
        'War Domain',
      ],
    },
    Druid: {
      name: 'Druid Circles',
      subclasses: ['Circle of the Land', 'Circle of the Moon'],
    },
    Fighter: {
      name: 'Martial Archetypes',
      subclasses: ['Battle Master', 'Champion', 'Eldritch Knight'],
    },
    Monk: {
      name: 'Monastic Traditions',
      subclasses: [
        'Way of the Four Elements',
        'Way of the Open Hand',
        'Way of Shadow',
      ],
    },
    Paladin: {
      name: 'Sacred Oaths',
      subclasses: [
        'Oath of the Ancients',
        'Oath of Devotion',
        'Oath of Vengeance',
      ],
    },
    Ranger: {
      name: 'Ranger Archetypes',
      subclasses: ['Beast Master', 'Hunter'],
    },
    Rogue: {
      name: 'Roguish Archetypes',
      subclasses: ['Arcane Trickster', 'Assassin', 'Thief'],
    },
    Sorcerer: {
      name: 'Sorcerous Origins',
      subclasses: ['Draconic Bloodline', 'Wild Magic'],
    },
    Warlock: {
      name: 'Otherwordly Patrons',
      subclasses: ['The Archfey', 'The Fiend', 'The Great Old One'],
    },
    Wizard: {
      name: 'Arcane Traditions',
      subclasses: [
        'School of Abjuration',
        'School of Conjuration',
        'School of Divination',
        'School of Enchantment',
        'School of Evocation',
        'School of Illusion',
        'School of Necromancy',
        'School of Transmutation',
      ],
    },
  },
})

export const getters = {}

export const mutations = {}

export const actions = {}
