import IconHotelFill0Wght100Grad0Opsz48 from '../components/HotelFill0Wght100Grad0Opsz48'
import IconHotelFill0Wght200Grad0Opsz48 from '../components/HotelFill0Wght200Grad0Opsz48'
import IconHotelFill0Wght300Grad0Opsz48 from '../components/HotelFill0Wght300Grad0Opsz48'
import IconHotelFill0Wght400Grad0Opsz48 from '../components/HotelFill0Wght400Grad0Opsz48'
import IconHotelFill0Wght500Grad0Opsz48 from '../components/HotelFill0Wght500Grad0Opsz48'
import IconHotelFill0Wght600Grad0Opsz48 from '../components/HotelFill0Wght600Grad0Opsz48'
import IconHotelFill0Wght700Grad0Opsz48 from '../components/HotelFill0Wght700Grad0Opsz48'
import IconHotelFill1Wght100Grad0Opsz48 from '../components/HotelFill1Wght100Grad0Opsz48'
import IconHotelFill1Wght200Grad0Opsz48 from '../components/HotelFill1Wght200Grad0Opsz48'
import IconHotelFill1Wght300Grad0Opsz48 from '../components/HotelFill1Wght300Grad0Opsz48'
import IconHotelFill1Wght400Grad0Opsz48 from '../components/HotelFill1Wght400Grad0Opsz48'
import IconHotelFill1Wght500Grad0Opsz48 from '../components/HotelFill1Wght500Grad0Opsz48'
import IconHotelFill1Wght600Grad0Opsz48 from '../components/HotelFill1Wght600Grad0Opsz48'
import IconHotelFill1Wght700Grad0Opsz48 from '../components/HotelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHotel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHotelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHotelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHotelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHotelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHotelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHotelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHotelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHotelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHotelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHotelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHotelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHotelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHotelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHotelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
