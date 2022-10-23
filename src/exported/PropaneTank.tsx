import IconPropaneTankFill0Wght100Grad0Opsz48 from '../components/PropaneTankFill0Wght100Grad0Opsz48'
import IconPropaneTankFill0Wght200Grad0Opsz48 from '../components/PropaneTankFill0Wght200Grad0Opsz48'
import IconPropaneTankFill0Wght300Grad0Opsz48 from '../components/PropaneTankFill0Wght300Grad0Opsz48'
import IconPropaneTankFill0Wght400Grad0Opsz48 from '../components/PropaneTankFill0Wght400Grad0Opsz48'
import IconPropaneTankFill0Wght500Grad0Opsz48 from '../components/PropaneTankFill0Wght500Grad0Opsz48'
import IconPropaneTankFill0Wght600Grad0Opsz48 from '../components/PropaneTankFill0Wght600Grad0Opsz48'
import IconPropaneTankFill0Wght700Grad0Opsz48 from '../components/PropaneTankFill0Wght700Grad0Opsz48'
import IconPropaneTankFill1Wght100Grad0Opsz48 from '../components/PropaneTankFill1Wght100Grad0Opsz48'
import IconPropaneTankFill1Wght200Grad0Opsz48 from '../components/PropaneTankFill1Wght200Grad0Opsz48'
import IconPropaneTankFill1Wght300Grad0Opsz48 from '../components/PropaneTankFill1Wght300Grad0Opsz48'
import IconPropaneTankFill1Wght400Grad0Opsz48 from '../components/PropaneTankFill1Wght400Grad0Opsz48'
import IconPropaneTankFill1Wght500Grad0Opsz48 from '../components/PropaneTankFill1Wght500Grad0Opsz48'
import IconPropaneTankFill1Wght600Grad0Opsz48 from '../components/PropaneTankFill1Wght600Grad0Opsz48'
import IconPropaneTankFill1Wght700Grad0Opsz48 from '../components/PropaneTankFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPropaneTank = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPropaneTankFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPropaneTankFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPropaneTankFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPropaneTankFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPropaneTankFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPropaneTankFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPropaneTankFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPropaneTankFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPropaneTankFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPropaneTankFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPropaneTankFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPropaneTankFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPropaneTankFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPropaneTankFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
