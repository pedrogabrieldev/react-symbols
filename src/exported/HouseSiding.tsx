import IconHouseSidingFill0Wght100Grad0Opsz48 from '../components/HouseSidingFill0Wght100Grad0Opsz48'
import IconHouseSidingFill0Wght200Grad0Opsz48 from '../components/HouseSidingFill0Wght200Grad0Opsz48'
import IconHouseSidingFill0Wght300Grad0Opsz48 from '../components/HouseSidingFill0Wght300Grad0Opsz48'
import IconHouseSidingFill0Wght400Grad0Opsz48 from '../components/HouseSidingFill0Wght400Grad0Opsz48'
import IconHouseSidingFill0Wght500Grad0Opsz48 from '../components/HouseSidingFill0Wght500Grad0Opsz48'
import IconHouseSidingFill0Wght600Grad0Opsz48 from '../components/HouseSidingFill0Wght600Grad0Opsz48'
import IconHouseSidingFill0Wght700Grad0Opsz48 from '../components/HouseSidingFill0Wght700Grad0Opsz48'
import IconHouseSidingFill1Wght100Grad0Opsz48 from '../components/HouseSidingFill1Wght100Grad0Opsz48'
import IconHouseSidingFill1Wght200Grad0Opsz48 from '../components/HouseSidingFill1Wght200Grad0Opsz48'
import IconHouseSidingFill1Wght300Grad0Opsz48 from '../components/HouseSidingFill1Wght300Grad0Opsz48'
import IconHouseSidingFill1Wght400Grad0Opsz48 from '../components/HouseSidingFill1Wght400Grad0Opsz48'
import IconHouseSidingFill1Wght500Grad0Opsz48 from '../components/HouseSidingFill1Wght500Grad0Opsz48'
import IconHouseSidingFill1Wght600Grad0Opsz48 from '../components/HouseSidingFill1Wght600Grad0Opsz48'
import IconHouseSidingFill1Wght700Grad0Opsz48 from '../components/HouseSidingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHouseSiding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHouseSidingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHouseSidingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHouseSidingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHouseSidingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHouseSidingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHouseSidingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHouseSidingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHouseSidingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHouseSidingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHouseSidingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHouseSidingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHouseSidingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHouseSidingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHouseSidingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
