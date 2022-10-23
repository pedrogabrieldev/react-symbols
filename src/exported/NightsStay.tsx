import IconNightsStayFill0Wght100Grad0Opsz48 from '../components/NightsStayFill0Wght100Grad0Opsz48'
import IconNightsStayFill0Wght200Grad0Opsz48 from '../components/NightsStayFill0Wght200Grad0Opsz48'
import IconNightsStayFill0Wght300Grad0Opsz48 from '../components/NightsStayFill0Wght300Grad0Opsz48'
import IconNightsStayFill0Wght400Grad0Opsz48 from '../components/NightsStayFill0Wght400Grad0Opsz48'
import IconNightsStayFill0Wght500Grad0Opsz48 from '../components/NightsStayFill0Wght500Grad0Opsz48'
import IconNightsStayFill0Wght600Grad0Opsz48 from '../components/NightsStayFill0Wght600Grad0Opsz48'
import IconNightsStayFill0Wght700Grad0Opsz48 from '../components/NightsStayFill0Wght700Grad0Opsz48'
import IconNightsStayFill1Wght100Grad0Opsz48 from '../components/NightsStayFill1Wght100Grad0Opsz48'
import IconNightsStayFill1Wght200Grad0Opsz48 from '../components/NightsStayFill1Wght200Grad0Opsz48'
import IconNightsStayFill1Wght300Grad0Opsz48 from '../components/NightsStayFill1Wght300Grad0Opsz48'
import IconNightsStayFill1Wght400Grad0Opsz48 from '../components/NightsStayFill1Wght400Grad0Opsz48'
import IconNightsStayFill1Wght500Grad0Opsz48 from '../components/NightsStayFill1Wght500Grad0Opsz48'
import IconNightsStayFill1Wght600Grad0Opsz48 from '../components/NightsStayFill1Wght600Grad0Opsz48'
import IconNightsStayFill1Wght700Grad0Opsz48 from '../components/NightsStayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNightsStay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNightsStayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNightsStayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNightsStayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNightsStayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNightsStayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNightsStayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNightsStayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNightsStayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNightsStayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNightsStayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNightsStayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNightsStayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNightsStayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNightsStayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
