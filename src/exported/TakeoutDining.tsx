import IconTakeoutDiningFill0Wght100Grad0Opsz48 from '../components/TakeoutDiningFill0Wght100Grad0Opsz48'
import IconTakeoutDiningFill0Wght200Grad0Opsz48 from '../components/TakeoutDiningFill0Wght200Grad0Opsz48'
import IconTakeoutDiningFill0Wght300Grad0Opsz48 from '../components/TakeoutDiningFill0Wght300Grad0Opsz48'
import IconTakeoutDiningFill0Wght400Grad0Opsz48 from '../components/TakeoutDiningFill0Wght400Grad0Opsz48'
import IconTakeoutDiningFill0Wght500Grad0Opsz48 from '../components/TakeoutDiningFill0Wght500Grad0Opsz48'
import IconTakeoutDiningFill0Wght600Grad0Opsz48 from '../components/TakeoutDiningFill0Wght600Grad0Opsz48'
import IconTakeoutDiningFill0Wght700Grad0Opsz48 from '../components/TakeoutDiningFill0Wght700Grad0Opsz48'
import IconTakeoutDiningFill1Wght100Grad0Opsz48 from '../components/TakeoutDiningFill1Wght100Grad0Opsz48'
import IconTakeoutDiningFill1Wght200Grad0Opsz48 from '../components/TakeoutDiningFill1Wght200Grad0Opsz48'
import IconTakeoutDiningFill1Wght300Grad0Opsz48 from '../components/TakeoutDiningFill1Wght300Grad0Opsz48'
import IconTakeoutDiningFill1Wght400Grad0Opsz48 from '../components/TakeoutDiningFill1Wght400Grad0Opsz48'
import IconTakeoutDiningFill1Wght500Grad0Opsz48 from '../components/TakeoutDiningFill1Wght500Grad0Opsz48'
import IconTakeoutDiningFill1Wght600Grad0Opsz48 from '../components/TakeoutDiningFill1Wght600Grad0Opsz48'
import IconTakeoutDiningFill1Wght700Grad0Opsz48 from '../components/TakeoutDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTakeoutDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTakeoutDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTakeoutDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTakeoutDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTakeoutDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTakeoutDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTakeoutDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTakeoutDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTakeoutDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTakeoutDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTakeoutDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTakeoutDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTakeoutDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTakeoutDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTakeoutDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
