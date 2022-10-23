import IconHouseboatFill0Wght100Grad0Opsz48 from '../components/HouseboatFill0Wght100Grad0Opsz48'
import IconHouseboatFill0Wght200Grad0Opsz48 from '../components/HouseboatFill0Wght200Grad0Opsz48'
import IconHouseboatFill0Wght300Grad0Opsz48 from '../components/HouseboatFill0Wght300Grad0Opsz48'
import IconHouseboatFill0Wght400Grad0Opsz48 from '../components/HouseboatFill0Wght400Grad0Opsz48'
import IconHouseboatFill0Wght500Grad0Opsz48 from '../components/HouseboatFill0Wght500Grad0Opsz48'
import IconHouseboatFill0Wght600Grad0Opsz48 from '../components/HouseboatFill0Wght600Grad0Opsz48'
import IconHouseboatFill0Wght700Grad0Opsz48 from '../components/HouseboatFill0Wght700Grad0Opsz48'
import IconHouseboatFill1Wght100Grad0Opsz48 from '../components/HouseboatFill1Wght100Grad0Opsz48'
import IconHouseboatFill1Wght200Grad0Opsz48 from '../components/HouseboatFill1Wght200Grad0Opsz48'
import IconHouseboatFill1Wght300Grad0Opsz48 from '../components/HouseboatFill1Wght300Grad0Opsz48'
import IconHouseboatFill1Wght400Grad0Opsz48 from '../components/HouseboatFill1Wght400Grad0Opsz48'
import IconHouseboatFill1Wght500Grad0Opsz48 from '../components/HouseboatFill1Wght500Grad0Opsz48'
import IconHouseboatFill1Wght600Grad0Opsz48 from '../components/HouseboatFill1Wght600Grad0Opsz48'
import IconHouseboatFill1Wght700Grad0Opsz48 from '../components/HouseboatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHouseboat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHouseboatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHouseboatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHouseboatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHouseboatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHouseboatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHouseboatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHouseboatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHouseboatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHouseboatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHouseboatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHouseboatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHouseboatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHouseboatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHouseboatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
