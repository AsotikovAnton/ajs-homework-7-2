import Character from '../app';

test('Убитый персонаж', () => {
  const сharacter = new Character('Shaun', 0);
  const received = () => сharacter.levelUp();

  expect(received).toThrow();
});

test('Успешное повышение уровня', () => {
  const сharacter = new Character('Shaun', 65);
  const expected = {
    name: 'Shaun',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  };

  сharacter.levelUp();

  expect(сharacter).toEqual(expected);
});
