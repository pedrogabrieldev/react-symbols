import IconFunctionsFill0Wght100Grad0Opsz48 from '../components/FunctionsFill0Wght100Grad0Opsz48'
import IconFunctionsFill0Wght200Grad0Opsz48 from '../components/FunctionsFill0Wght200Grad0Opsz48'
import IconFunctionsFill0Wght300Grad0Opsz48 from '../components/FunctionsFill0Wght300Grad0Opsz48'
import IconFunctionsFill0Wght400Grad0Opsz48 from '../components/FunctionsFill0Wght400Grad0Opsz48'
import IconFunctionsFill0Wght500Grad0Opsz48 from '../components/FunctionsFill0Wght500Grad0Opsz48'
import IconFunctionsFill0Wght600Grad0Opsz48 from '../components/FunctionsFill0Wght600Grad0Opsz48'
import IconFunctionsFill0Wght700Grad0Opsz48 from '../components/FunctionsFill0Wght700Grad0Opsz48'
import IconFunctionsFill1Wght100Grad0Opsz48 from '../components/FunctionsFill1Wght100Grad0Opsz48'
import IconFunctionsFill1Wght200Grad0Opsz48 from '../components/FunctionsFill1Wght200Grad0Opsz48'
import IconFunctionsFill1Wght300Grad0Opsz48 from '../components/FunctionsFill1Wght300Grad0Opsz48'
import IconFunctionsFill1Wght400Grad0Opsz48 from '../components/FunctionsFill1Wght400Grad0Opsz48'
import IconFunctionsFill1Wght500Grad0Opsz48 from '../components/FunctionsFill1Wght500Grad0Opsz48'
import IconFunctionsFill1Wght600Grad0Opsz48 from '../components/FunctionsFill1Wght600Grad0Opsz48'
import IconFunctionsFill1Wght700Grad0Opsz48 from '../components/FunctionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFunctions = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFunctionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFunctionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFunctionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFunctionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFunctionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFunctionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFunctionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFunctionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFunctionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFunctionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFunctionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFunctionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFunctionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFunctionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
