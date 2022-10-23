import IconHotelClassFill0Wght100Grad0Opsz48 from '../components/HotelClassFill0Wght100Grad0Opsz48'
import IconHotelClassFill0Wght200Grad0Opsz48 from '../components/HotelClassFill0Wght200Grad0Opsz48'
import IconHotelClassFill0Wght300Grad0Opsz48 from '../components/HotelClassFill0Wght300Grad0Opsz48'
import IconHotelClassFill0Wght400Grad0Opsz48 from '../components/HotelClassFill0Wght400Grad0Opsz48'
import IconHotelClassFill0Wght500Grad0Opsz48 from '../components/HotelClassFill0Wght500Grad0Opsz48'
import IconHotelClassFill0Wght600Grad0Opsz48 from '../components/HotelClassFill0Wght600Grad0Opsz48'
import IconHotelClassFill0Wght700Grad0Opsz48 from '../components/HotelClassFill0Wght700Grad0Opsz48'
import IconHotelClassFill1Wght100Grad0Opsz48 from '../components/HotelClassFill1Wght100Grad0Opsz48'
import IconHotelClassFill1Wght200Grad0Opsz48 from '../components/HotelClassFill1Wght200Grad0Opsz48'
import IconHotelClassFill1Wght300Grad0Opsz48 from '../components/HotelClassFill1Wght300Grad0Opsz48'
import IconHotelClassFill1Wght400Grad0Opsz48 from '../components/HotelClassFill1Wght400Grad0Opsz48'
import IconHotelClassFill1Wght500Grad0Opsz48 from '../components/HotelClassFill1Wght500Grad0Opsz48'
import IconHotelClassFill1Wght600Grad0Opsz48 from '../components/HotelClassFill1Wght600Grad0Opsz48'
import IconHotelClassFill1Wght700Grad0Opsz48 from '../components/HotelClassFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHotelClass = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHotelClassFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHotelClassFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHotelClassFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHotelClassFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHotelClassFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHotelClassFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHotelClassFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHotelClassFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHotelClassFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHotelClassFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHotelClassFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHotelClassFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHotelClassFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHotelClassFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
