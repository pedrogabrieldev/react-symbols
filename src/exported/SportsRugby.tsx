import IconSportsRugbyFill0Wght100Grad0Opsz48 from '../components/SportsRugbyFill0Wght100Grad0Opsz48'
import IconSportsRugbyFill0Wght200Grad0Opsz48 from '../components/SportsRugbyFill0Wght200Grad0Opsz48'
import IconSportsRugbyFill0Wght300Grad0Opsz48 from '../components/SportsRugbyFill0Wght300Grad0Opsz48'
import IconSportsRugbyFill0Wght400Grad0Opsz48 from '../components/SportsRugbyFill0Wght400Grad0Opsz48'
import IconSportsRugbyFill0Wght500Grad0Opsz48 from '../components/SportsRugbyFill0Wght500Grad0Opsz48'
import IconSportsRugbyFill0Wght600Grad0Opsz48 from '../components/SportsRugbyFill0Wght600Grad0Opsz48'
import IconSportsRugbyFill0Wght700Grad0Opsz48 from '../components/SportsRugbyFill0Wght700Grad0Opsz48'
import IconSportsRugbyFill1Wght100Grad0Opsz48 from '../components/SportsRugbyFill1Wght100Grad0Opsz48'
import IconSportsRugbyFill1Wght200Grad0Opsz48 from '../components/SportsRugbyFill1Wght200Grad0Opsz48'
import IconSportsRugbyFill1Wght300Grad0Opsz48 from '../components/SportsRugbyFill1Wght300Grad0Opsz48'
import IconSportsRugbyFill1Wght400Grad0Opsz48 from '../components/SportsRugbyFill1Wght400Grad0Opsz48'
import IconSportsRugbyFill1Wght500Grad0Opsz48 from '../components/SportsRugbyFill1Wght500Grad0Opsz48'
import IconSportsRugbyFill1Wght600Grad0Opsz48 from '../components/SportsRugbyFill1Wght600Grad0Opsz48'
import IconSportsRugbyFill1Wght700Grad0Opsz48 from '../components/SportsRugbyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsRugby = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsRugbyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsRugbyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsRugbyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsRugbyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsRugbyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsRugbyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsRugbyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsRugbyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsRugbyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsRugbyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsRugbyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsRugbyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsRugbyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsRugbyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
