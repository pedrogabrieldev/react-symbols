import IconKingBedFill0Wght100Grad0Opsz48 from '../components/KingBedFill0Wght100Grad0Opsz48'
import IconKingBedFill0Wght200Grad0Opsz48 from '../components/KingBedFill0Wght200Grad0Opsz48'
import IconKingBedFill0Wght300Grad0Opsz48 from '../components/KingBedFill0Wght300Grad0Opsz48'
import IconKingBedFill0Wght400Grad0Opsz48 from '../components/KingBedFill0Wght400Grad0Opsz48'
import IconKingBedFill0Wght500Grad0Opsz48 from '../components/KingBedFill0Wght500Grad0Opsz48'
import IconKingBedFill0Wght600Grad0Opsz48 from '../components/KingBedFill0Wght600Grad0Opsz48'
import IconKingBedFill0Wght700Grad0Opsz48 from '../components/KingBedFill0Wght700Grad0Opsz48'
import IconKingBedFill1Wght100Grad0Opsz48 from '../components/KingBedFill1Wght100Grad0Opsz48'
import IconKingBedFill1Wght200Grad0Opsz48 from '../components/KingBedFill1Wght200Grad0Opsz48'
import IconKingBedFill1Wght300Grad0Opsz48 from '../components/KingBedFill1Wght300Grad0Opsz48'
import IconKingBedFill1Wght400Grad0Opsz48 from '../components/KingBedFill1Wght400Grad0Opsz48'
import IconKingBedFill1Wght500Grad0Opsz48 from '../components/KingBedFill1Wght500Grad0Opsz48'
import IconKingBedFill1Wght600Grad0Opsz48 from '../components/KingBedFill1Wght600Grad0Opsz48'
import IconKingBedFill1Wght700Grad0Opsz48 from '../components/KingBedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKingBed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKingBedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKingBedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKingBedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKingBedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKingBedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKingBedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKingBedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKingBedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKingBedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKingBedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKingBedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKingBedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKingBedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKingBedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
