import IconAirlineSeatIndividualSuiteFill0Wght100Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght100Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght200Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght200Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght300Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght300Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght400Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght400Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght500Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght500Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght600Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght600Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill0Wght700Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill0Wght700Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght100Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght100Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght200Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght200Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght300Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght300Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght400Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght400Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght500Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght500Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght600Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght600Grad0Opsz48'
import IconAirlineSeatIndividualSuiteFill1Wght700Grad0Opsz48 from '../components/AirlineSeatIndividualSuiteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineSeatIndividualSuite = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineSeatIndividualSuiteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineSeatIndividualSuiteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineSeatIndividualSuiteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineSeatIndividualSuiteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineSeatIndividualSuiteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineSeatIndividualSuiteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineSeatIndividualSuiteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineSeatIndividualSuiteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineSeatIndividualSuiteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineSeatIndividualSuiteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineSeatIndividualSuiteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineSeatIndividualSuiteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineSeatIndividualSuiteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineSeatIndividualSuiteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
