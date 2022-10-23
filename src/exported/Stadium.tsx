import IconStadiumFill0Wght100Grad0Opsz48 from '../components/StadiumFill0Wght100Grad0Opsz48'
import IconStadiumFill0Wght200Grad0Opsz48 from '../components/StadiumFill0Wght200Grad0Opsz48'
import IconStadiumFill0Wght300Grad0Opsz48 from '../components/StadiumFill0Wght300Grad0Opsz48'
import IconStadiumFill0Wght400Grad0Opsz48 from '../components/StadiumFill0Wght400Grad0Opsz48'
import IconStadiumFill0Wght500Grad0Opsz48 from '../components/StadiumFill0Wght500Grad0Opsz48'
import IconStadiumFill0Wght600Grad0Opsz48 from '../components/StadiumFill0Wght600Grad0Opsz48'
import IconStadiumFill0Wght700Grad0Opsz48 from '../components/StadiumFill0Wght700Grad0Opsz48'
import IconStadiumFill1Wght100Grad0Opsz48 from '../components/StadiumFill1Wght100Grad0Opsz48'
import IconStadiumFill1Wght200Grad0Opsz48 from '../components/StadiumFill1Wght200Grad0Opsz48'
import IconStadiumFill1Wght300Grad0Opsz48 from '../components/StadiumFill1Wght300Grad0Opsz48'
import IconStadiumFill1Wght400Grad0Opsz48 from '../components/StadiumFill1Wght400Grad0Opsz48'
import IconStadiumFill1Wght500Grad0Opsz48 from '../components/StadiumFill1Wght500Grad0Opsz48'
import IconStadiumFill1Wght600Grad0Opsz48 from '../components/StadiumFill1Wght600Grad0Opsz48'
import IconStadiumFill1Wght700Grad0Opsz48 from '../components/StadiumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStadium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStadiumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStadiumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStadiumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStadiumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStadiumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStadiumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStadiumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStadiumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStadiumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStadiumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStadiumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStadiumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStadiumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStadiumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
