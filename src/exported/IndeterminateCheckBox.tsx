import IconIndeterminateCheckBoxFill0Wght100Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght100Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght200Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght200Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght300Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght300Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght400Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght400Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght500Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght500Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght600Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght600Grad0Opsz48'
import IconIndeterminateCheckBoxFill0Wght700Grad0Opsz48 from '../components/IndeterminateCheckBoxFill0Wght700Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght100Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght100Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght200Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght200Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght300Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght300Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght400Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght400Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght500Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght500Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght600Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght600Grad0Opsz48'
import IconIndeterminateCheckBoxFill1Wght700Grad0Opsz48 from '../components/IndeterminateCheckBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIndeterminateCheckBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIndeterminateCheckBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIndeterminateCheckBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIndeterminateCheckBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIndeterminateCheckBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIndeterminateCheckBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIndeterminateCheckBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIndeterminateCheckBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIndeterminateCheckBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIndeterminateCheckBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIndeterminateCheckBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIndeterminateCheckBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIndeterminateCheckBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIndeterminateCheckBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIndeterminateCheckBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
