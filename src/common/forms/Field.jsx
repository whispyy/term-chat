import Label from './Label'
import Input from './Input'

const Field = ({
  id = 'default',
  labelText,
  ...props
}) => (
  <div>
    <Label htmlFor={id}>{labelText}</Label>
    <Input id={id} {...props} />
  </div>
)

export default Field
