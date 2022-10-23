import IconAccountCircleFill0Wght100Grad0Opsz48 from '../components/AccountCircleFill0Wght100Grad0Opsz48'
import IconAccountCircleFill0Wght200Grad0Opsz48 from '../components/AccountCircleFill0Wght200Grad0Opsz48'
import IconAccountCircleFill0Wght300Grad0Opsz48 from '../components/AccountCircleFill0Wght300Grad0Opsz48'
import IconAccountCircleFill0Wght400Grad0Opsz48 from '../components/AccountCircleFill0Wght400Grad0Opsz48'
import IconAccountCircleFill0Wght500Grad0Opsz48 from '../components/AccountCircleFill0Wght500Grad0Opsz48'
import IconAccountCircleFill0Wght600Grad0Opsz48 from '../components/AccountCircleFill0Wght600Grad0Opsz48'
import IconAccountCircleFill0Wght700Grad0Opsz48 from '../components/AccountCircleFill0Wght700Grad0Opsz48'
import IconAccountCircleFill1Wght100Grad0Opsz48 from '../components/AccountCircleFill1Wght100Grad0Opsz48'
import IconAccountCircleFill1Wght200Grad0Opsz48 from '../components/AccountCircleFill1Wght200Grad0Opsz48'
import IconAccountCircleFill1Wght300Grad0Opsz48 from '../components/AccountCircleFill1Wght300Grad0Opsz48'
import IconAccountCircleFill1Wght400Grad0Opsz48 from '../components/AccountCircleFill1Wght400Grad0Opsz48'
import IconAccountCircleFill1Wght500Grad0Opsz48 from '../components/AccountCircleFill1Wght500Grad0Opsz48'
import IconAccountCircleFill1Wght600Grad0Opsz48 from '../components/AccountCircleFill1Wght600Grad0Opsz48'
import IconAccountCircleFill1Wght700Grad0Opsz48 from '../components/AccountCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccountCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccountCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccountCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccountCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccountCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccountCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccountCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccountCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccountCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccountCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccountCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccountCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccountCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccountCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccountCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
