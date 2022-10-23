import IconFunctionFill0Wght100Grad0Opsz48 from '../components/FunctionFill0Wght100Grad0Opsz48'
import IconFunctionFill0Wght200Grad0Opsz48 from '../components/FunctionFill0Wght200Grad0Opsz48'
import IconFunctionFill0Wght300Grad0Opsz48 from '../components/FunctionFill0Wght300Grad0Opsz48'
import IconFunctionFill0Wght400Grad0Opsz48 from '../components/FunctionFill0Wght400Grad0Opsz48'
import IconFunctionFill0Wght500Grad0Opsz48 from '../components/FunctionFill0Wght500Grad0Opsz48'
import IconFunctionFill0Wght600Grad0Opsz48 from '../components/FunctionFill0Wght600Grad0Opsz48'
import IconFunctionFill0Wght700Grad0Opsz48 from '../components/FunctionFill0Wght700Grad0Opsz48'
import IconFunctionFill1Wght100Grad0Opsz48 from '../components/FunctionFill1Wght100Grad0Opsz48'
import IconFunctionFill1Wght200Grad0Opsz48 from '../components/FunctionFill1Wght200Grad0Opsz48'
import IconFunctionFill1Wght300Grad0Opsz48 from '../components/FunctionFill1Wght300Grad0Opsz48'
import IconFunctionFill1Wght400Grad0Opsz48 from '../components/FunctionFill1Wght400Grad0Opsz48'
import IconFunctionFill1Wght500Grad0Opsz48 from '../components/FunctionFill1Wght500Grad0Opsz48'
import IconFunctionFill1Wght600Grad0Opsz48 from '../components/FunctionFill1Wght600Grad0Opsz48'
import IconFunctionFill1Wght700Grad0Opsz48 from '../components/FunctionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFunction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFunctionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFunctionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFunctionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFunctionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFunctionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFunctionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFunctionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFunctionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFunctionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFunctionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFunctionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFunctionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFunctionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFunctionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
