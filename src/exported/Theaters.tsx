import IconTheatersFill0Wght100Grad0Opsz48 from '../components/TheatersFill0Wght100Grad0Opsz48'
import IconTheatersFill0Wght200Grad0Opsz48 from '../components/TheatersFill0Wght200Grad0Opsz48'
import IconTheatersFill0Wght300Grad0Opsz48 from '../components/TheatersFill0Wght300Grad0Opsz48'
import IconTheatersFill0Wght400Grad0Opsz48 from '../components/TheatersFill0Wght400Grad0Opsz48'
import IconTheatersFill0Wght500Grad0Opsz48 from '../components/TheatersFill0Wght500Grad0Opsz48'
import IconTheatersFill0Wght600Grad0Opsz48 from '../components/TheatersFill0Wght600Grad0Opsz48'
import IconTheatersFill0Wght700Grad0Opsz48 from '../components/TheatersFill0Wght700Grad0Opsz48'
import IconTheatersFill1Wght100Grad0Opsz48 from '../components/TheatersFill1Wght100Grad0Opsz48'
import IconTheatersFill1Wght200Grad0Opsz48 from '../components/TheatersFill1Wght200Grad0Opsz48'
import IconTheatersFill1Wght300Grad0Opsz48 from '../components/TheatersFill1Wght300Grad0Opsz48'
import IconTheatersFill1Wght400Grad0Opsz48 from '../components/TheatersFill1Wght400Grad0Opsz48'
import IconTheatersFill1Wght500Grad0Opsz48 from '../components/TheatersFill1Wght500Grad0Opsz48'
import IconTheatersFill1Wght600Grad0Opsz48 from '../components/TheatersFill1Wght600Grad0Opsz48'
import IconTheatersFill1Wght700Grad0Opsz48 from '../components/TheatersFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTheaters = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTheatersFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTheatersFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTheatersFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTheatersFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTheatersFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTheatersFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTheatersFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTheatersFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTheatersFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTheatersFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTheatersFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTheatersFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTheatersFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTheatersFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
