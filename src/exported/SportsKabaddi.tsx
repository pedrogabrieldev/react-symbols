import IconSportsKabaddiFill0Wght100Grad0Opsz48 from '../components/SportsKabaddiFill0Wght100Grad0Opsz48'
import IconSportsKabaddiFill0Wght200Grad0Opsz48 from '../components/SportsKabaddiFill0Wght200Grad0Opsz48'
import IconSportsKabaddiFill0Wght300Grad0Opsz48 from '../components/SportsKabaddiFill0Wght300Grad0Opsz48'
import IconSportsKabaddiFill0Wght400Grad0Opsz48 from '../components/SportsKabaddiFill0Wght400Grad0Opsz48'
import IconSportsKabaddiFill0Wght500Grad0Opsz48 from '../components/SportsKabaddiFill0Wght500Grad0Opsz48'
import IconSportsKabaddiFill0Wght600Grad0Opsz48 from '../components/SportsKabaddiFill0Wght600Grad0Opsz48'
import IconSportsKabaddiFill0Wght700Grad0Opsz48 from '../components/SportsKabaddiFill0Wght700Grad0Opsz48'
import IconSportsKabaddiFill1Wght100Grad0Opsz48 from '../components/SportsKabaddiFill1Wght100Grad0Opsz48'
import IconSportsKabaddiFill1Wght200Grad0Opsz48 from '../components/SportsKabaddiFill1Wght200Grad0Opsz48'
import IconSportsKabaddiFill1Wght300Grad0Opsz48 from '../components/SportsKabaddiFill1Wght300Grad0Opsz48'
import IconSportsKabaddiFill1Wght400Grad0Opsz48 from '../components/SportsKabaddiFill1Wght400Grad0Opsz48'
import IconSportsKabaddiFill1Wght500Grad0Opsz48 from '../components/SportsKabaddiFill1Wght500Grad0Opsz48'
import IconSportsKabaddiFill1Wght600Grad0Opsz48 from '../components/SportsKabaddiFill1Wght600Grad0Opsz48'
import IconSportsKabaddiFill1Wght700Grad0Opsz48 from '../components/SportsKabaddiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsKabaddi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsKabaddiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsKabaddiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsKabaddiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsKabaddiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsKabaddiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsKabaddiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsKabaddiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsKabaddiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsKabaddiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsKabaddiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsKabaddiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsKabaddiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsKabaddiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsKabaddiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
