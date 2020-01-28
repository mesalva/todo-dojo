test('Quando a função expo for chamada', () => {
  expect(expo(2)).toBe(4)
  expect(expo(3)).toEqual(9)

  expect(expo(2, 3)).toEqual(8)
})

function expo(numero, potencia = 2) {
  return numero ** potencia
}
