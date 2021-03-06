import DropdownView from './view/DropdownView';
import DropdownModel from './model/DropdownModel';

class Dropdown {
  constructor(input, options) {
    this.model = new DropdownModel(options);

    const props = options;
    props.text = this.model.text;
    this.view = new DropdownView(input, props, this);
    this.model.addUpdateListener(this.update.bind(this));
  }

  update(data) {
    this.view.update(data);
  }

  onChange(id, value) {
    this.model.setValue(id, value);
  }

  onClear() {
    this.model.clear();
  }
}

export default Dropdown;
