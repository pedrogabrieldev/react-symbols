import IconHouseFill0Wght100Grad0Opsz48 from '../components/HouseFill0Wght100Grad0Opsz48'
import IconHouseFill0Wght200Grad0Opsz48 from '../components/HouseFill0Wght200Grad0Opsz48'
import IconHouseFill0Wght300Grad0Opsz48 from '../components/HouseFill0Wght300Grad0Opsz48'
import IconHouseFill0Wght400Grad0Opsz48 from '../components/HouseFill0Wght400Grad0Opsz48'
import IconHouseFill0Wght500Grad0Opsz48 from '../components/HouseFill0Wght500Grad0Opsz48'
import IconHouseFill0Wght600Grad0Opsz48 from '../components/HouseFill0Wght600Grad0Opsz48'
import IconHouseFill0Wght700Grad0Opsz48 from '../components/HouseFill0Wght700Grad0Opsz48'
import IconHouseFill1Wght100Grad0Opsz48 from '../components/HouseFill1Wght100Grad0Opsz48'
import IconHouseFill1Wght200Grad0Opsz48 from '../components/HouseFill1Wght200Grad0Opsz48'
import IconHouseFill1Wght300Grad0Opsz48 from '../components/HouseFill1Wght300Grad0Opsz48'
import IconHouseFill1Wght400Grad0Opsz48 from '../components/HouseFill1Wght400Grad0Opsz48'
import IconHouseFill1Wght500Grad0Opsz48 from '../components/HouseFill1Wght500Grad0Opsz48'
import IconHouseFill1Wght600Grad0Opsz48 from '../components/HouseFill1Wght600Grad0Opsz48'
import IconHouseFill1Wght700Grad0Opsz48 from '../components/HouseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHouse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHouseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHouseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHouseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHouseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHouseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHouseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHouseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHouseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHouseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHouseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHouseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHouseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHouseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHouseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
