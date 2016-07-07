const ALL_NAMES = [
  'Latlux',
  'Opela',
  'Tres-Zap',
  'Bitwolf',
  'Domainer',
  'Temp',
  'Konklux',
  'Bitwolf',
  'Zathin',
  'Ventosanzap',
  'Tres',
];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * (ALL_NAMES.length - 0)) + 0;
  return ALL_NAMES[randomIndex];
}

export default {
  method: ['POST'],
  path: '/api/name/random',

  config: {
    handler(request, reply) {
      const { num } = JSON.parse(request.payload);
      const randomNames = [];
      for (let i = 0; i < num; i++) {
        randomNames.push(getRandomName());
      }
      return reply({
        name: randomNames.join(' '),
      });
    },
  },
};
