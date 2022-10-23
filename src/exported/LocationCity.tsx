import IconLocationCityFill0Wght100Grad0Opsz48 from '../components/LocationCityFill0Wght100Grad0Opsz48'
import IconLocationCityFill0Wght200Grad0Opsz48 from '../components/LocationCityFill0Wght200Grad0Opsz48'
import IconLocationCityFill0Wght300Grad0Opsz48 from '../components/LocationCityFill0Wght300Grad0Opsz48'
import IconLocationCityFill0Wght400Grad0Opsz48 from '../components/LocationCityFill0Wght400Grad0Opsz48'
import IconLocationCityFill0Wght500Grad0Opsz48 from '../components/LocationCityFill0Wght500Grad0Opsz48'
import IconLocationCityFill0Wght600Grad0Opsz48 from '../components/LocationCityFill0Wght600Grad0Opsz48'
import IconLocationCityFill0Wght700Grad0Opsz48 from '../components/LocationCityFill0Wght700Grad0Opsz48'
import IconLocationCityFill1Wght100Grad0Opsz48 from '../components/LocationCityFill1Wght100Grad0Opsz48'
import IconLocationCityFill1Wght200Grad0Opsz48 from '../components/LocationCityFill1Wght200Grad0Opsz48'
import IconLocationCityFill1Wght300Grad0Opsz48 from '../components/LocationCityFill1Wght300Grad0Opsz48'
import IconLocationCityFill1Wght400Grad0Opsz48 from '../components/LocationCityFill1Wght400Grad0Opsz48'
import IconLocationCityFill1Wght500Grad0Opsz48 from '../components/LocationCityFill1Wght500Grad0Opsz48'
import IconLocationCityFill1Wght600Grad0Opsz48 from '../components/LocationCityFill1Wght600Grad0Opsz48'
import IconLocationCityFill1Wght700Grad0Opsz48 from '../components/LocationCityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationCity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationCityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationCityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationCityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationCityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationCityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationCityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationCityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationCityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationCityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationCityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationCityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationCityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationCityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationCityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
