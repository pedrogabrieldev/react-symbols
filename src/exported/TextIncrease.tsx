import IconTextIncreaseFill0Wght100Grad0Opsz48 from '../components/TextIncreaseFill0Wght100Grad0Opsz48'
import IconTextIncreaseFill0Wght200Grad0Opsz48 from '../components/TextIncreaseFill0Wght200Grad0Opsz48'
import IconTextIncreaseFill0Wght300Grad0Opsz48 from '../components/TextIncreaseFill0Wght300Grad0Opsz48'
import IconTextIncreaseFill0Wght400Grad0Opsz48 from '../components/TextIncreaseFill0Wght400Grad0Opsz48'
import IconTextIncreaseFill0Wght500Grad0Opsz48 from '../components/TextIncreaseFill0Wght500Grad0Opsz48'
import IconTextIncreaseFill0Wght600Grad0Opsz48 from '../components/TextIncreaseFill0Wght600Grad0Opsz48'
import IconTextIncreaseFill0Wght700Grad0Opsz48 from '../components/TextIncreaseFill0Wght700Grad0Opsz48'
import IconTextIncreaseFill1Wght100Grad0Opsz48 from '../components/TextIncreaseFill1Wght100Grad0Opsz48'
import IconTextIncreaseFill1Wght200Grad0Opsz48 from '../components/TextIncreaseFill1Wght200Grad0Opsz48'
import IconTextIncreaseFill1Wght300Grad0Opsz48 from '../components/TextIncreaseFill1Wght300Grad0Opsz48'
import IconTextIncreaseFill1Wght400Grad0Opsz48 from '../components/TextIncreaseFill1Wght400Grad0Opsz48'
import IconTextIncreaseFill1Wght500Grad0Opsz48 from '../components/TextIncreaseFill1Wght500Grad0Opsz48'
import IconTextIncreaseFill1Wght600Grad0Opsz48 from '../components/TextIncreaseFill1Wght600Grad0Opsz48'
import IconTextIncreaseFill1Wght700Grad0Opsz48 from '../components/TextIncreaseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextIncrease = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextIncreaseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextIncreaseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextIncreaseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextIncreaseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextIncreaseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextIncreaseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextIncreaseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextIncreaseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextIncreaseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextIncreaseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextIncreaseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextIncreaseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextIncreaseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextIncreaseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
