import IconChurchFill0Wght100Grad0Opsz48 from '../components/ChurchFill0Wght100Grad0Opsz48'
import IconChurchFill0Wght200Grad0Opsz48 from '../components/ChurchFill0Wght200Grad0Opsz48'
import IconChurchFill0Wght300Grad0Opsz48 from '../components/ChurchFill0Wght300Grad0Opsz48'
import IconChurchFill0Wght400Grad0Opsz48 from '../components/ChurchFill0Wght400Grad0Opsz48'
import IconChurchFill0Wght500Grad0Opsz48 from '../components/ChurchFill0Wght500Grad0Opsz48'
import IconChurchFill0Wght600Grad0Opsz48 from '../components/ChurchFill0Wght600Grad0Opsz48'
import IconChurchFill0Wght700Grad0Opsz48 from '../components/ChurchFill0Wght700Grad0Opsz48'
import IconChurchFill1Wght100Grad0Opsz48 from '../components/ChurchFill1Wght100Grad0Opsz48'
import IconChurchFill1Wght200Grad0Opsz48 from '../components/ChurchFill1Wght200Grad0Opsz48'
import IconChurchFill1Wght300Grad0Opsz48 from '../components/ChurchFill1Wght300Grad0Opsz48'
import IconChurchFill1Wght400Grad0Opsz48 from '../components/ChurchFill1Wght400Grad0Opsz48'
import IconChurchFill1Wght500Grad0Opsz48 from '../components/ChurchFill1Wght500Grad0Opsz48'
import IconChurchFill1Wght600Grad0Opsz48 from '../components/ChurchFill1Wght600Grad0Opsz48'
import IconChurchFill1Wght700Grad0Opsz48 from '../components/ChurchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChurch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChurchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChurchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChurchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChurchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChurchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChurchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChurchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChurchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChurchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChurchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChurchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChurchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChurchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChurchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
