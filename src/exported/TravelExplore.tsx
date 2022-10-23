import IconTravelExploreFill0Wght100Grad0Opsz48 from '../components/TravelExploreFill0Wght100Grad0Opsz48'
import IconTravelExploreFill0Wght200Grad0Opsz48 from '../components/TravelExploreFill0Wght200Grad0Opsz48'
import IconTravelExploreFill0Wght300Grad0Opsz48 from '../components/TravelExploreFill0Wght300Grad0Opsz48'
import IconTravelExploreFill0Wght400Grad0Opsz48 from '../components/TravelExploreFill0Wght400Grad0Opsz48'
import IconTravelExploreFill0Wght500Grad0Opsz48 from '../components/TravelExploreFill0Wght500Grad0Opsz48'
import IconTravelExploreFill0Wght600Grad0Opsz48 from '../components/TravelExploreFill0Wght600Grad0Opsz48'
import IconTravelExploreFill0Wght700Grad0Opsz48 from '../components/TravelExploreFill0Wght700Grad0Opsz48'
import IconTravelExploreFill1Wght100Grad0Opsz48 from '../components/TravelExploreFill1Wght100Grad0Opsz48'
import IconTravelExploreFill1Wght200Grad0Opsz48 from '../components/TravelExploreFill1Wght200Grad0Opsz48'
import IconTravelExploreFill1Wght300Grad0Opsz48 from '../components/TravelExploreFill1Wght300Grad0Opsz48'
import IconTravelExploreFill1Wght400Grad0Opsz48 from '../components/TravelExploreFill1Wght400Grad0Opsz48'
import IconTravelExploreFill1Wght500Grad0Opsz48 from '../components/TravelExploreFill1Wght500Grad0Opsz48'
import IconTravelExploreFill1Wght600Grad0Opsz48 from '../components/TravelExploreFill1Wght600Grad0Opsz48'
import IconTravelExploreFill1Wght700Grad0Opsz48 from '../components/TravelExploreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTravelExplore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTravelExploreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTravelExploreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTravelExploreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTravelExploreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTravelExploreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTravelExploreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTravelExploreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTravelExploreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTravelExploreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTravelExploreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTravelExploreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTravelExploreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTravelExploreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTravelExploreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
