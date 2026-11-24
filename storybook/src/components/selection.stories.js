import { checkbox, option, radio, row, stack, switchControl } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default { title: 'Components/Selection Controls', parameters: docs('Checkbox', 'چک‌باکس، رادیو و سوئیچ. برای ردیف کامل با عنوان از «Option Row» استفاده کنید.') };
const off = { controls: { disable: true } };
export const Checkbox = {
  args: { checked: true, disabled: false, error: false },
  render: args => checkbox({ ...args, label: 'انتخاب' }),
};
export const Radio = { parameters: { ...off, ...docs('Radio') }, render: () => row([radio({ name: 'r', checked: true, label: 'گزینهٔ اول' }), radio({ name: 'r', label: 'گزینهٔ دوم' }), radio({ name: 'r2', disabled: true, label: 'غیرفعال' })]) };
export const Switch = { parameters: docs('Switch'), args: { checked: true, disabled: false }, render: args => switchControl({ ...args, label: 'تمدید خودکار' }) };
export const AllStates = {
  parameters: off,
  render: () => stack([
    row([checkbox({ label: 'خالی' }), checkbox({ checked: true, label: 'انتخاب‌شده' }), checkbox({ checked: true, disabled: true, label: 'قفل' }), checkbox({ error: true, label: 'خطا' })]),
    row([radio({ name: 'a', label: 'خالی' }), radio({ name: 'b', checked: true, label: 'انتخاب‌شده' }), radio({ name: 'c', disabled: true, label: 'غیرفعال' })]),
    row([switchControl({ label: 'خاموش' }), switchControl({ checked: true, label: 'روشن' }), switchControl({ disabled: true, label: 'غیرفعال' })]),
  ], 20),
};
