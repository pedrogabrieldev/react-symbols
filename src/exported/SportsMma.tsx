import IconSportsMmaFill0Wght100Grad0Opsz48 from '../components/SportsMmaFill0Wght100Grad0Opsz48'
import IconSportsMmaFill0Wght200Grad0Opsz48 from '../components/SportsMmaFill0Wght200Grad0Opsz48'
import IconSportsMmaFill0Wght300Grad0Opsz48 from '../components/SportsMmaFill0Wght300Grad0Opsz48'
import IconSportsMmaFill0Wght400Grad0Opsz48 from '../components/SportsMmaFill0Wght400Grad0Opsz48'
import IconSportsMmaFill0Wght500Grad0Opsz48 from '../components/SportsMmaFill0Wght500Grad0Opsz48'
import IconSportsMmaFill0Wght600Grad0Opsz48 from '../components/SportsMmaFill0Wght600Grad0Opsz48'
import IconSportsMmaFill0Wght700Grad0Opsz48 from '../components/SportsMmaFill0Wght700Grad0Opsz48'
import IconSportsMmaFill1Wght100Grad0Opsz48 from '../components/SportsMmaFill1Wght100Grad0Opsz48'
import IconSportsMmaFill1Wght200Grad0Opsz48 from '../components/SportsMmaFill1Wght200Grad0Opsz48'
import IconSportsMmaFill1Wght300Grad0Opsz48 from '../components/SportsMmaFill1Wght300Grad0Opsz48'
import IconSportsMmaFill1Wght400Grad0Opsz48 from '../components/SportsMmaFill1Wght400Grad0Opsz48'
import IconSportsMmaFill1Wght500Grad0Opsz48 from '../components/SportsMmaFill1Wght500Grad0Opsz48'
import IconSportsMmaFill1Wght600Grad0Opsz48 from '../components/SportsMmaFill1Wght600Grad0Opsz48'
import IconSportsMmaFill1Wght700Grad0Opsz48 from '../components/SportsMmaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsMma = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsMmaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsMmaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsMmaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsMmaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsMmaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsMmaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsMmaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsMmaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsMmaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsMmaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsMmaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsMmaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsMmaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsMmaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
