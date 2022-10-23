import IconOtherHousesFill0Wght100Grad0Opsz48 from '../components/OtherHousesFill0Wght100Grad0Opsz48'
import IconOtherHousesFill0Wght200Grad0Opsz48 from '../components/OtherHousesFill0Wght200Grad0Opsz48'
import IconOtherHousesFill0Wght300Grad0Opsz48 from '../components/OtherHousesFill0Wght300Grad0Opsz48'
import IconOtherHousesFill0Wght400Grad0Opsz48 from '../components/OtherHousesFill0Wght400Grad0Opsz48'
import IconOtherHousesFill0Wght500Grad0Opsz48 from '../components/OtherHousesFill0Wght500Grad0Opsz48'
import IconOtherHousesFill0Wght600Grad0Opsz48 from '../components/OtherHousesFill0Wght600Grad0Opsz48'
import IconOtherHousesFill0Wght700Grad0Opsz48 from '../components/OtherHousesFill0Wght700Grad0Opsz48'
import IconOtherHousesFill1Wght100Grad0Opsz48 from '../components/OtherHousesFill1Wght100Grad0Opsz48'
import IconOtherHousesFill1Wght200Grad0Opsz48 from '../components/OtherHousesFill1Wght200Grad0Opsz48'
import IconOtherHousesFill1Wght300Grad0Opsz48 from '../components/OtherHousesFill1Wght300Grad0Opsz48'
import IconOtherHousesFill1Wght400Grad0Opsz48 from '../components/OtherHousesFill1Wght400Grad0Opsz48'
import IconOtherHousesFill1Wght500Grad0Opsz48 from '../components/OtherHousesFill1Wght500Grad0Opsz48'
import IconOtherHousesFill1Wght600Grad0Opsz48 from '../components/OtherHousesFill1Wght600Grad0Opsz48'
import IconOtherHousesFill1Wght700Grad0Opsz48 from '../components/OtherHousesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOtherHouses = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOtherHousesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOtherHousesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOtherHousesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOtherHousesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOtherHousesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOtherHousesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOtherHousesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOtherHousesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOtherHousesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOtherHousesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOtherHousesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOtherHousesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOtherHousesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOtherHousesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
