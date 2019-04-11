import { AppConfigFile } from './git-info-file';
import * as tempy from 'tempy';

const subject = AppConfigFile(tempy.directory());

describe(AppConfigFile.name, () => {
  it(`${subject.addModel}`, () => {
    subject.write({});
    subject.addModel('foo');
    expect(subject.read().models).toEqual({ foo: '*' });
  });

  it(`${subject.removeModel}`, () => {
    subject.write({ models: { foo: 'bar' } });
    subject.removeModel('foo');
    expect(subject.read().models).toEqual({});
  });
});
