import IconSportsBarFill0Wght100Grad0Opsz48 from '../components/SportsBarFill0Wght100Grad0Opsz48'
import IconSportsBarFill0Wght200Grad0Opsz48 from '../components/SportsBarFill0Wght200Grad0Opsz48'
import IconSportsBarFill0Wght300Grad0Opsz48 from '../components/SportsBarFill0Wght300Grad0Opsz48'
import IconSportsBarFill0Wght400Grad0Opsz48 from '../components/SportsBarFill0Wght400Grad0Opsz48'
import IconSportsBarFill0Wght500Grad0Opsz48 from '../components/SportsBarFill0Wght500Grad0Opsz48'
import IconSportsBarFill0Wght600Grad0Opsz48 from '../components/SportsBarFill0Wght600Grad0Opsz48'
import IconSportsBarFill0Wght700Grad0Opsz48 from '../components/SportsBarFill0Wght700Grad0Opsz48'
import IconSportsBarFill1Wght100Grad0Opsz48 from '../components/SportsBarFill1Wght100Grad0Opsz48'
import IconSportsBarFill1Wght200Grad0Opsz48 from '../components/SportsBarFill1Wght200Grad0Opsz48'
import IconSportsBarFill1Wght300Grad0Opsz48 from '../components/SportsBarFill1Wght300Grad0Opsz48'
import IconSportsBarFill1Wght400Grad0Opsz48 from '../components/SportsBarFill1Wght400Grad0Opsz48'
import IconSportsBarFill1Wght500Grad0Opsz48 from '../components/SportsBarFill1Wght500Grad0Opsz48'
import IconSportsBarFill1Wght600Grad0Opsz48 from '../components/SportsBarFill1Wght600Grad0Opsz48'
import IconSportsBarFill1Wght700Grad0Opsz48 from '../components/SportsBarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsBar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsBarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsBarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsBarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsBarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsBarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsBarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsBarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsBarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsBarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsBarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsBarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsBarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsBarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsBarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
