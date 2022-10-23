import IconNestCamIqFill0Wght100Grad0Opsz48 from '../components/NestCamIqFill0Wght100Grad0Opsz48'
import IconNestCamIqFill0Wght200Grad0Opsz48 from '../components/NestCamIqFill0Wght200Grad0Opsz48'
import IconNestCamIqFill0Wght300Grad0Opsz48 from '../components/NestCamIqFill0Wght300Grad0Opsz48'
import IconNestCamIqFill0Wght400Grad0Opsz48 from '../components/NestCamIqFill0Wght400Grad0Opsz48'
import IconNestCamIqFill0Wght500Grad0Opsz48 from '../components/NestCamIqFill0Wght500Grad0Opsz48'
import IconNestCamIqFill0Wght600Grad0Opsz48 from '../components/NestCamIqFill0Wght600Grad0Opsz48'
import IconNestCamIqFill0Wght700Grad0Opsz48 from '../components/NestCamIqFill0Wght700Grad0Opsz48'
import IconNestCamIqFill1Wght100Grad0Opsz48 from '../components/NestCamIqFill1Wght100Grad0Opsz48'
import IconNestCamIqFill1Wght200Grad0Opsz48 from '../components/NestCamIqFill1Wght200Grad0Opsz48'
import IconNestCamIqFill1Wght300Grad0Opsz48 from '../components/NestCamIqFill1Wght300Grad0Opsz48'
import IconNestCamIqFill1Wght400Grad0Opsz48 from '../components/NestCamIqFill1Wght400Grad0Opsz48'
import IconNestCamIqFill1Wght500Grad0Opsz48 from '../components/NestCamIqFill1Wght500Grad0Opsz48'
import IconNestCamIqFill1Wght600Grad0Opsz48 from '../components/NestCamIqFill1Wght600Grad0Opsz48'
import IconNestCamIqFill1Wght700Grad0Opsz48 from '../components/NestCamIqFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamIq = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamIqFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamIqFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamIqFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamIqFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamIqFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamIqFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamIqFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamIqFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamIqFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamIqFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamIqFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamIqFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamIqFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamIqFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
