import IconBabyChangingStationFill0Wght100Grad0Opsz48 from '../components/BabyChangingStationFill0Wght100Grad0Opsz48'
import IconBabyChangingStationFill0Wght200Grad0Opsz48 from '../components/BabyChangingStationFill0Wght200Grad0Opsz48'
import IconBabyChangingStationFill0Wght300Grad0Opsz48 from '../components/BabyChangingStationFill0Wght300Grad0Opsz48'
import IconBabyChangingStationFill0Wght400Grad0Opsz48 from '../components/BabyChangingStationFill0Wght400Grad0Opsz48'
import IconBabyChangingStationFill0Wght500Grad0Opsz48 from '../components/BabyChangingStationFill0Wght500Grad0Opsz48'
import IconBabyChangingStationFill0Wght600Grad0Opsz48 from '../components/BabyChangingStationFill0Wght600Grad0Opsz48'
import IconBabyChangingStationFill0Wght700Grad0Opsz48 from '../components/BabyChangingStationFill0Wght700Grad0Opsz48'
import IconBabyChangingStationFill1Wght100Grad0Opsz48 from '../components/BabyChangingStationFill1Wght100Grad0Opsz48'
import IconBabyChangingStationFill1Wght200Grad0Opsz48 from '../components/BabyChangingStationFill1Wght200Grad0Opsz48'
import IconBabyChangingStationFill1Wght300Grad0Opsz48 from '../components/BabyChangingStationFill1Wght300Grad0Opsz48'
import IconBabyChangingStationFill1Wght400Grad0Opsz48 from '../components/BabyChangingStationFill1Wght400Grad0Opsz48'
import IconBabyChangingStationFill1Wght500Grad0Opsz48 from '../components/BabyChangingStationFill1Wght500Grad0Opsz48'
import IconBabyChangingStationFill1Wght600Grad0Opsz48 from '../components/BabyChangingStationFill1Wght600Grad0Opsz48'
import IconBabyChangingStationFill1Wght700Grad0Opsz48 from '../components/BabyChangingStationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBabyChangingStation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBabyChangingStationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBabyChangingStationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBabyChangingStationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBabyChangingStationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBabyChangingStationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBabyChangingStationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBabyChangingStationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBabyChangingStationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBabyChangingStationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBabyChangingStationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBabyChangingStationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBabyChangingStationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBabyChangingStationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBabyChangingStationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
