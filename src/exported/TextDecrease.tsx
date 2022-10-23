import IconTextDecreaseFill0Wght100Grad0Opsz48 from '../components/TextDecreaseFill0Wght100Grad0Opsz48'
import IconTextDecreaseFill0Wght200Grad0Opsz48 from '../components/TextDecreaseFill0Wght200Grad0Opsz48'
import IconTextDecreaseFill0Wght300Grad0Opsz48 from '../components/TextDecreaseFill0Wght300Grad0Opsz48'
import IconTextDecreaseFill0Wght400Grad0Opsz48 from '../components/TextDecreaseFill0Wght400Grad0Opsz48'
import IconTextDecreaseFill0Wght500Grad0Opsz48 from '../components/TextDecreaseFill0Wght500Grad0Opsz48'
import IconTextDecreaseFill0Wght600Grad0Opsz48 from '../components/TextDecreaseFill0Wght600Grad0Opsz48'
import IconTextDecreaseFill0Wght700Grad0Opsz48 from '../components/TextDecreaseFill0Wght700Grad0Opsz48'
import IconTextDecreaseFill1Wght100Grad0Opsz48 from '../components/TextDecreaseFill1Wght100Grad0Opsz48'
import IconTextDecreaseFill1Wght200Grad0Opsz48 from '../components/TextDecreaseFill1Wght200Grad0Opsz48'
import IconTextDecreaseFill1Wght300Grad0Opsz48 from '../components/TextDecreaseFill1Wght300Grad0Opsz48'
import IconTextDecreaseFill1Wght400Grad0Opsz48 from '../components/TextDecreaseFill1Wght400Grad0Opsz48'
import IconTextDecreaseFill1Wght500Grad0Opsz48 from '../components/TextDecreaseFill1Wght500Grad0Opsz48'
import IconTextDecreaseFill1Wght600Grad0Opsz48 from '../components/TextDecreaseFill1Wght600Grad0Opsz48'
import IconTextDecreaseFill1Wght700Grad0Opsz48 from '../components/TextDecreaseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextDecrease = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextDecreaseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextDecreaseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextDecreaseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextDecreaseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextDecreaseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextDecreaseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextDecreaseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextDecreaseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextDecreaseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextDecreaseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextDecreaseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextDecreaseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextDecreaseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextDecreaseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
