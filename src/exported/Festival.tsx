import IconFestivalFill0Wght100Grad0Opsz48 from '../components/FestivalFill0Wght100Grad0Opsz48'
import IconFestivalFill0Wght200Grad0Opsz48 from '../components/FestivalFill0Wght200Grad0Opsz48'
import IconFestivalFill0Wght300Grad0Opsz48 from '../components/FestivalFill0Wght300Grad0Opsz48'
import IconFestivalFill0Wght400Grad0Opsz48 from '../components/FestivalFill0Wght400Grad0Opsz48'
import IconFestivalFill0Wght500Grad0Opsz48 from '../components/FestivalFill0Wght500Grad0Opsz48'
import IconFestivalFill0Wght600Grad0Opsz48 from '../components/FestivalFill0Wght600Grad0Opsz48'
import IconFestivalFill0Wght700Grad0Opsz48 from '../components/FestivalFill0Wght700Grad0Opsz48'
import IconFestivalFill1Wght100Grad0Opsz48 from '../components/FestivalFill1Wght100Grad0Opsz48'
import IconFestivalFill1Wght200Grad0Opsz48 from '../components/FestivalFill1Wght200Grad0Opsz48'
import IconFestivalFill1Wght300Grad0Opsz48 from '../components/FestivalFill1Wght300Grad0Opsz48'
import IconFestivalFill1Wght400Grad0Opsz48 from '../components/FestivalFill1Wght400Grad0Opsz48'
import IconFestivalFill1Wght500Grad0Opsz48 from '../components/FestivalFill1Wght500Grad0Opsz48'
import IconFestivalFill1Wght600Grad0Opsz48 from '../components/FestivalFill1Wght600Grad0Opsz48'
import IconFestivalFill1Wght700Grad0Opsz48 from '../components/FestivalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFestival = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFestivalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFestivalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFestivalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFestivalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFestivalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFestivalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFestivalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFestivalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFestivalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFestivalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFestivalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFestivalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFestivalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFestivalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
