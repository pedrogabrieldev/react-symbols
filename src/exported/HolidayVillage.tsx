import IconHolidayVillageFill0Wght100Grad0Opsz48 from '../components/HolidayVillageFill0Wght100Grad0Opsz48'
import IconHolidayVillageFill0Wght200Grad0Opsz48 from '../components/HolidayVillageFill0Wght200Grad0Opsz48'
import IconHolidayVillageFill0Wght300Grad0Opsz48 from '../components/HolidayVillageFill0Wght300Grad0Opsz48'
import IconHolidayVillageFill0Wght400Grad0Opsz48 from '../components/HolidayVillageFill0Wght400Grad0Opsz48'
import IconHolidayVillageFill0Wght500Grad0Opsz48 from '../components/HolidayVillageFill0Wght500Grad0Opsz48'
import IconHolidayVillageFill0Wght600Grad0Opsz48 from '../components/HolidayVillageFill0Wght600Grad0Opsz48'
import IconHolidayVillageFill0Wght700Grad0Opsz48 from '../components/HolidayVillageFill0Wght700Grad0Opsz48'
import IconHolidayVillageFill1Wght100Grad0Opsz48 from '../components/HolidayVillageFill1Wght100Grad0Opsz48'
import IconHolidayVillageFill1Wght200Grad0Opsz48 from '../components/HolidayVillageFill1Wght200Grad0Opsz48'
import IconHolidayVillageFill1Wght300Grad0Opsz48 from '../components/HolidayVillageFill1Wght300Grad0Opsz48'
import IconHolidayVillageFill1Wght400Grad0Opsz48 from '../components/HolidayVillageFill1Wght400Grad0Opsz48'
import IconHolidayVillageFill1Wght500Grad0Opsz48 from '../components/HolidayVillageFill1Wght500Grad0Opsz48'
import IconHolidayVillageFill1Wght600Grad0Opsz48 from '../components/HolidayVillageFill1Wght600Grad0Opsz48'
import IconHolidayVillageFill1Wght700Grad0Opsz48 from '../components/HolidayVillageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHolidayVillage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHolidayVillageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHolidayVillageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHolidayVillageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHolidayVillageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHolidayVillageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHolidayVillageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHolidayVillageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHolidayVillageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHolidayVillageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHolidayVillageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHolidayVillageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHolidayVillageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHolidayVillageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHolidayVillageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
