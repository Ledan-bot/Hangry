const formatter = new Intl.NumberFormat('en-US', {
  styles: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

describe("Testing the number formatter", () => {
  test('It handles numbers with 1 digit after the decimal', () => {
    const num = 12.5
    const formatted = formatter.format(num)
    expect(formatted).toBe("12.50")
  })

  test('It hangles numbers with 3 digits after decimal', () => {
    const num = 12.500
    const formatted = formatter.format(num)
    expect(formatted).toBe("12.50")
  });
  test('It hangles numbers with 4 digits after decimal', () => {
    const num = 12.5001
    const formatted = formatter.format(num)
    expect(formatted).toBe("12.50")
  });
  test('It hangles numbers with 5 digits after decimal', () => {
    const num = 12.50001
    const formatted = formatter.format(num)
    expect(formatted).toBe("12.50")
  });

  test('It handles strings', () => {
    const num = "12.500"
    const formatted = formatter.format(num)
    expect(formatted).toBe("12.50")
  });

  test('It returns a string', () => {
    const num = "12.500"
    const formatted = formatter.format(num)
    expect(typeof formatted).toBe("string")
  });
})