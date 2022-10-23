import IconSportsTennisFill0Wght100Grad0Opsz48 from '../components/SportsTennisFill0Wght100Grad0Opsz48'
import IconSportsTennisFill0Wght200Grad0Opsz48 from '../components/SportsTennisFill0Wght200Grad0Opsz48'
import IconSportsTennisFill0Wght300Grad0Opsz48 from '../components/SportsTennisFill0Wght300Grad0Opsz48'
import IconSportsTennisFill0Wght400Grad0Opsz48 from '../components/SportsTennisFill0Wght400Grad0Opsz48'
import IconSportsTennisFill0Wght500Grad0Opsz48 from '../components/SportsTennisFill0Wght500Grad0Opsz48'
import IconSportsTennisFill0Wght600Grad0Opsz48 from '../components/SportsTennisFill0Wght600Grad0Opsz48'
import IconSportsTennisFill0Wght700Grad0Opsz48 from '../components/SportsTennisFill0Wght700Grad0Opsz48'
import IconSportsTennisFill1Wght100Grad0Opsz48 from '../components/SportsTennisFill1Wght100Grad0Opsz48'
import IconSportsTennisFill1Wght200Grad0Opsz48 from '../components/SportsTennisFill1Wght200Grad0Opsz48'
import IconSportsTennisFill1Wght300Grad0Opsz48 from '../components/SportsTennisFill1Wght300Grad0Opsz48'
import IconSportsTennisFill1Wght400Grad0Opsz48 from '../components/SportsTennisFill1Wght400Grad0Opsz48'
import IconSportsTennisFill1Wght500Grad0Opsz48 from '../components/SportsTennisFill1Wght500Grad0Opsz48'
import IconSportsTennisFill1Wght600Grad0Opsz48 from '../components/SportsTennisFill1Wght600Grad0Opsz48'
import IconSportsTennisFill1Wght700Grad0Opsz48 from '../components/SportsTennisFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsTennis = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsTennisFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsTennisFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsTennisFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsTennisFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsTennisFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsTennisFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsTennisFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsTennisFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsTennisFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsTennisFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsTennisFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsTennisFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsTennisFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsTennisFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
