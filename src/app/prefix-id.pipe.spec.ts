import { PrefixPipe } from './prefix-id.pipe';

describe('PrefixPipe', () => {

  it('transforms string input', () => {
    const pipe = new PrefixPipe();
    let prefixed = pipe.transform('a', 'prefix-');

    expect(prefixed).toEqual('prefix-a')
  });

  it('transforms number input', () => {
    const pipe = new PrefixPipe();
    let prefixed = pipe.transform(1, 'prefix-');

    expect(prefixed).toEqual('prefix-1')
  });
});
