import IconDynamicFormFill0Wght100Grad0Opsz48 from '../components/DynamicFormFill0Wght100Grad0Opsz48'
import IconDynamicFormFill0Wght200Grad0Opsz48 from '../components/DynamicFormFill0Wght200Grad0Opsz48'
import IconDynamicFormFill0Wght300Grad0Opsz48 from '../components/DynamicFormFill0Wght300Grad0Opsz48'
import IconDynamicFormFill0Wght400Grad0Opsz48 from '../components/DynamicFormFill0Wght400Grad0Opsz48'
import IconDynamicFormFill0Wght500Grad0Opsz48 from '../components/DynamicFormFill0Wght500Grad0Opsz48'
import IconDynamicFormFill0Wght600Grad0Opsz48 from '../components/DynamicFormFill0Wght600Grad0Opsz48'
import IconDynamicFormFill0Wght700Grad0Opsz48 from '../components/DynamicFormFill0Wght700Grad0Opsz48'
import IconDynamicFormFill1Wght100Grad0Opsz48 from '../components/DynamicFormFill1Wght100Grad0Opsz48'
import IconDynamicFormFill1Wght200Grad0Opsz48 from '../components/DynamicFormFill1Wght200Grad0Opsz48'
import IconDynamicFormFill1Wght300Grad0Opsz48 from '../components/DynamicFormFill1Wght300Grad0Opsz48'
import IconDynamicFormFill1Wght400Grad0Opsz48 from '../components/DynamicFormFill1Wght400Grad0Opsz48'
import IconDynamicFormFill1Wght500Grad0Opsz48 from '../components/DynamicFormFill1Wght500Grad0Opsz48'
import IconDynamicFormFill1Wght600Grad0Opsz48 from '../components/DynamicFormFill1Wght600Grad0Opsz48'
import IconDynamicFormFill1Wght700Grad0Opsz48 from '../components/DynamicFormFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDynamicForm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDynamicFormFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDynamicFormFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDynamicFormFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDynamicFormFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDynamicFormFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDynamicFormFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDynamicFormFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDynamicFormFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDynamicFormFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDynamicFormFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDynamicFormFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDynamicFormFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDynamicFormFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDynamicFormFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
