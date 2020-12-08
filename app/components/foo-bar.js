import Component from '@glimmer/component';

export default class FooBar extends Component {
  one() {
    return foo(`${this.path}/codemirror.js`);
  }
}
