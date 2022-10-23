import IconStayCurrentLandscapeFill0Wght100Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght100Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght200Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght200Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght300Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght300Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght400Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght400Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght500Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght500Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght600Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght600Grad0Opsz48'
import IconStayCurrentLandscapeFill0Wght700Grad0Opsz48 from '../components/StayCurrentLandscapeFill0Wght700Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght100Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght100Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght200Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght200Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght300Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght300Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght400Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght400Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght500Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght500Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght600Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght600Grad0Opsz48'
import IconStayCurrentLandscapeFill1Wght700Grad0Opsz48 from '../components/StayCurrentLandscapeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStayCurrentLandscape = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStayCurrentLandscapeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStayCurrentLandscapeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStayCurrentLandscapeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStayCurrentLandscapeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStayCurrentLandscapeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStayCurrentLandscapeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStayCurrentLandscapeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStayCurrentLandscapeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStayCurrentLandscapeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStayCurrentLandscapeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStayCurrentLandscapeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStayCurrentLandscapeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStayCurrentLandscapeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStayCurrentLandscapeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
