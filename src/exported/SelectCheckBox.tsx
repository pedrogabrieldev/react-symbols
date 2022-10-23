import IconSelectCheckBoxFill0Wght100Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght100Grad0Opsz48'
import IconSelectCheckBoxFill0Wght200Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght200Grad0Opsz48'
import IconSelectCheckBoxFill0Wght300Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght300Grad0Opsz48'
import IconSelectCheckBoxFill0Wght400Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght400Grad0Opsz48'
import IconSelectCheckBoxFill0Wght500Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght500Grad0Opsz48'
import IconSelectCheckBoxFill0Wght600Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght600Grad0Opsz48'
import IconSelectCheckBoxFill0Wght700Grad0Opsz48 from '../components/SelectCheckBoxFill0Wght700Grad0Opsz48'
import IconSelectCheckBoxFill1Wght100Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght100Grad0Opsz48'
import IconSelectCheckBoxFill1Wght200Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght200Grad0Opsz48'
import IconSelectCheckBoxFill1Wght300Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght300Grad0Opsz48'
import IconSelectCheckBoxFill1Wght400Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght400Grad0Opsz48'
import IconSelectCheckBoxFill1Wght500Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght500Grad0Opsz48'
import IconSelectCheckBoxFill1Wght600Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght600Grad0Opsz48'
import IconSelectCheckBoxFill1Wght700Grad0Opsz48 from '../components/SelectCheckBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSelectCheckBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSelectCheckBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSelectCheckBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSelectCheckBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSelectCheckBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSelectCheckBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSelectCheckBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSelectCheckBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSelectCheckBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSelectCheckBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSelectCheckBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSelectCheckBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSelectCheckBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSelectCheckBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSelectCheckBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
