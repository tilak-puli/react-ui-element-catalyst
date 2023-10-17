import {ElementComponent} from '../../src';

const meta = {
  component: ElementComponent,
};

export const Primary = {
  render: (args) => <ElementComponent {...args} />,
  argTypes: {
    color: {control: 'color'},
  },
  args: {
    //👇 Now all Button stories will be primary.
    color: 'red',
  },
};

export default meta;
