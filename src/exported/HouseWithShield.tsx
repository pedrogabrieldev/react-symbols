import IconHouseWithShieldFill0Wght100Grad0Opsz48 from '../components/HouseWithShieldFill0Wght100Grad0Opsz48'
import IconHouseWithShieldFill0Wght200Grad0Opsz48 from '../components/HouseWithShieldFill0Wght200Grad0Opsz48'
import IconHouseWithShieldFill0Wght300Grad0Opsz48 from '../components/HouseWithShieldFill0Wght300Grad0Opsz48'
import IconHouseWithShieldFill0Wght400Grad0Opsz48 from '../components/HouseWithShieldFill0Wght400Grad0Opsz48'
import IconHouseWithShieldFill0Wght500Grad0Opsz48 from '../components/HouseWithShieldFill0Wght500Grad0Opsz48'
import IconHouseWithShieldFill0Wght600Grad0Opsz48 from '../components/HouseWithShieldFill0Wght600Grad0Opsz48'
import IconHouseWithShieldFill0Wght700Grad0Opsz48 from '../components/HouseWithShieldFill0Wght700Grad0Opsz48'
import IconHouseWithShieldFill1Wght100Grad0Opsz48 from '../components/HouseWithShieldFill1Wght100Grad0Opsz48'
import IconHouseWithShieldFill1Wght200Grad0Opsz48 from '../components/HouseWithShieldFill1Wght200Grad0Opsz48'
import IconHouseWithShieldFill1Wght300Grad0Opsz48 from '../components/HouseWithShieldFill1Wght300Grad0Opsz48'
import IconHouseWithShieldFill1Wght400Grad0Opsz48 from '../components/HouseWithShieldFill1Wght400Grad0Opsz48'
import IconHouseWithShieldFill1Wght500Grad0Opsz48 from '../components/HouseWithShieldFill1Wght500Grad0Opsz48'
import IconHouseWithShieldFill1Wght600Grad0Opsz48 from '../components/HouseWithShieldFill1Wght600Grad0Opsz48'
import IconHouseWithShieldFill1Wght700Grad0Opsz48 from '../components/HouseWithShieldFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHouseWithShield = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHouseWithShieldFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHouseWithShieldFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHouseWithShieldFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHouseWithShieldFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHouseWithShieldFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHouseWithShieldFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHouseWithShieldFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHouseWithShieldFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHouseWithShieldFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHouseWithShieldFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHouseWithShieldFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHouseWithShieldFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHouseWithShieldFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHouseWithShieldFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
