import IconTheaterComedyFill0Wght100Grad0Opsz48 from '../components/TheaterComedyFill0Wght100Grad0Opsz48'
import IconTheaterComedyFill0Wght200Grad0Opsz48 from '../components/TheaterComedyFill0Wght200Grad0Opsz48'
import IconTheaterComedyFill0Wght300Grad0Opsz48 from '../components/TheaterComedyFill0Wght300Grad0Opsz48'
import IconTheaterComedyFill0Wght400Grad0Opsz48 from '../components/TheaterComedyFill0Wght400Grad0Opsz48'
import IconTheaterComedyFill0Wght500Grad0Opsz48 from '../components/TheaterComedyFill0Wght500Grad0Opsz48'
import IconTheaterComedyFill0Wght600Grad0Opsz48 from '../components/TheaterComedyFill0Wght600Grad0Opsz48'
import IconTheaterComedyFill0Wght700Grad0Opsz48 from '../components/TheaterComedyFill0Wght700Grad0Opsz48'
import IconTheaterComedyFill1Wght100Grad0Opsz48 from '../components/TheaterComedyFill1Wght100Grad0Opsz48'
import IconTheaterComedyFill1Wght200Grad0Opsz48 from '../components/TheaterComedyFill1Wght200Grad0Opsz48'
import IconTheaterComedyFill1Wght300Grad0Opsz48 from '../components/TheaterComedyFill1Wght300Grad0Opsz48'
import IconTheaterComedyFill1Wght400Grad0Opsz48 from '../components/TheaterComedyFill1Wght400Grad0Opsz48'
import IconTheaterComedyFill1Wght500Grad0Opsz48 from '../components/TheaterComedyFill1Wght500Grad0Opsz48'
import IconTheaterComedyFill1Wght600Grad0Opsz48 from '../components/TheaterComedyFill1Wght600Grad0Opsz48'
import IconTheaterComedyFill1Wght700Grad0Opsz48 from '../components/TheaterComedyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTheaterComedy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTheaterComedyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTheaterComedyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTheaterComedyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTheaterComedyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTheaterComedyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTheaterComedyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTheaterComedyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTheaterComedyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTheaterComedyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTheaterComedyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTheaterComedyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTheaterComedyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTheaterComedyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTheaterComedyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
